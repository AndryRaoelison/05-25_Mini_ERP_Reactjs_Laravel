import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const PieChartBox = () => {
    const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
    ];
  return (
    <div className="flex flex-col h-full">
        <h5 className="mx-0 text-3xl font-bold ">Leads by source</h5>
        <div className=" flex w-full flex-3/4 items-center">
        <ResponsiveContainer width={"99%"} height={400}>
            <PieChart >
            <Tooltip contentStyle={{backgroundColor:"var(--main-bg)", border:'none'}}/>
                <Pie
                data={data}
                innerRadius={"80%"}
                outerRadius={"90%"}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                >
                {data.map((index) => (
                    <Cell key={`cell-${index}`} fill={index.color} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
        </div>
        <div className="flex w-full flex-1/4 items-center">
            {
            data.map((item)=>(
                   <div key={item.name}  className="flex flex-col">
                        <div>
                            <span className={`inline-block h-[10px] w-[10px] rounded-full`} style={{ backgroundColor: item.color }}></span> {item.name}   
                        </div> 
                        <p>{item.value}</p>
                    </div>    
            ))   
            }
        </div>
    </div>
  )
}

export default PieChartBox