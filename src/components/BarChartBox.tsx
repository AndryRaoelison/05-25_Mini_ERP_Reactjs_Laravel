import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis,  } from 'recharts';

type Props = {
    color : string,
    title : string,
    dataKey : string,
    chartData : object[]
}
const BarChartBox = (props : Props) => {

 return (
  <div className='h-full p-0'>
    <div className="flex flex-col justify-between mx-0 flex-3/5">
        <h5 className="mx-0 px-2 text-2xl font-bold ">{props.title}</h5>
        </div>
        <div className='h-[175px] '>
          <ResponsiveContainer width="99%" height="100%">
            <BarChart  data={props.chartData}>
              <Tooltip
              labelStyle={{display:"none"}}
              contentStyle={{backgroundColor : "var(--main-bg)", border:'none'}}
              cursor = {{fill:"none"}}
              itemStyle={{textTransform: "capitalize"}}
              />
              <XAxis dataKey="name" fontSize={15} />
              <Bar dataKey={props.dataKey} fill={props.color} />
            </BarChart>
          </ResponsiveContainer>
        </div>
  </div>
//--------Data for Product conversion (total ratio) at homepage
      
    );
}

export default BarChartBox

