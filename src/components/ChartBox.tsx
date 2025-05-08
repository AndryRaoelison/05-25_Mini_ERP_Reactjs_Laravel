import { Link } from "react-router-dom"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"

type Props = {
    color : string,
    icon : string,
    title : string,
    number : string, 
    dataKey : string,
    percentage : number,
    chartData : object[]
}

const ChartBox = (props : Props) => {
      
  return (
    <div className="flex mx-0 h-full px-1 py-4">
        <div className="flex flex-col justify-between mx-0 flex-3/5">
            <div className="mx-0 text-xl font-bold flex items-center gap-2"><img src={props.icon} className="h-[30px] mx-0" alt="" /><h5 className="mx-0">{props.title}</h5></div>
            <span className="block mx-0 text-4xl font-bold">{props.number}</span>
            <Link to='/' className={`mx-0 text-xl font-normal text-[${props.color}]`}>View all</Link>
        </div>
        <div className="flex flex-col flex-2/5 ">
            <div className="w-full  flex-1  ">
            <ResponsiveContainer width="99%" >
                <LineChart data={props.chartData} >
                    <Tooltip
                        contentStyle={{backgroundColor: "transparent",border:"none"}} 
                        labelStyle={{display: 'none'}} 
                        cursor={{display:'none'}}
                        position={{x:5, y:60}}
                        itemStyle={{textTransform: "capitalize"}}
                        />
                    <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
            </div>
            <div className="flex  flex-col justify-end  mx-0 text-right ">
                <span className={"block mx-0 text-xl font-bold " + ( props.percentage>0 ? "text-green-600 " : "text-red-600")}>
                    {(props.percentage>0 ? `+${props.percentage}` : props.percentage)}%
                </span>
                <span className="block mx-0 sm:capitalize text-lg text-gray-500">this month</span>
            </div>
        </div>
    </div>
  )
}

export default ChartBox