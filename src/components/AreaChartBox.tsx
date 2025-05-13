import { Area, AreaChart,  ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const AreaChartBox = () => {
    const data = [
  {
    name: 'Jan',
    clothes: 4000,
    elec: 2400,
    food: 2400,
  },
  {
    name: 'Feb',
    clothes: 3000,
    elec: 1398,
    food: 2210,
  },
  {
    name: 'Mar',
    clothes: 2000,
    elec: 9800,
    food: 2290,
  },
  {
    name: 'Apr',
    clothes: 2780,
    elec: 3908,
    food: 2000,
  },
  {
    name: 'May',
    clothes: 1890,
    elec: 4800,
    food: 2181,
  },
  {
    name: 'Jun',
    clothes: 2390,
    elec: 3800,
    food: 2500,
  },
  {
    name: 'Jul',
    clothes: 3490,
    elec: 4300,
    food: 2100,
  },
];
  return (
    <div className="h-[95%]">
        <h5 className="mx-0 text-2xl font-bold ">Revenue Analytics</h5>
        <div className="h-full mx-0">
        <ResponsiveContainer width="99%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 0,
            left: -15,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip 
          contentStyle={{backgroundColor : "var(--main-bg)"}}
          cursor={{fill:"none"}}
          labelStyle={{display:"none"}}
          itemStyle={{textTransform : "capitalize"}}
          />
          <Area type="monotone" dataKey="clothes" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="elec" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="food" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default AreaChartBox