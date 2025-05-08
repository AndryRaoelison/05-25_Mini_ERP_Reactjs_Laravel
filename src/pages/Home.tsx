import ChartBox from "../components/ChartBox"
import TopDeals from "../components/TopDealsSection"
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../constant"

const Home = () => {
  return (
    <div className="p-[15px] grid grid-cols-4 gap-1.5 auto-rows-[minmax(180px,auto)] h-[90vh]">
      <div className="border-2 border-soft-bg mx-0! p-2 row-span-3 col-span-1 overflow-hidden">
        <TopDeals/>
      </div>
      <div className="border-2 border-soft-bg mx-0! p-2"><ChartBox {...chartBoxUser}/></div>
      <div className="border-2 border-soft-bg mx-0! p-2"><ChartBox {...chartBoxProduct}/></div>
      <div className="border-2 border-soft-bg mx-0! p-2 row-span-3 col-span-1">box4</div>
      <div className="border-2 border-soft-bg mx-0! p-2"><ChartBox {...chartBoxRevenue}/></div>
      <div className="border-2 border-soft-bg mx-0! p-2"><ChartBox {...chartBoxConversion} /></div>
      <div className="border-2 border-soft-bg mx-0! p-2 col-span-2 row-span-2">box7</div>
      <div className="border-2 border-soft-bg mx-0! p-2 col-start-1">box8</div>
      <div className="border-2 border-soft-bg mx-0! p-2 col-start-4">box9</div>
    </div>
  )
}

export default Home