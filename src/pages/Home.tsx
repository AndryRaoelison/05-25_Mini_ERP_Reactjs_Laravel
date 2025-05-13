import AreaChartBox from "../components/AreaChartBox"
import BarChartBox from "../components/BarChartBox"
import ChartBox from "../components/ChartBox"
import PieChartBox from "../components/PieChartBox"
import TopDeals from "../components/TopDealsSection"
import { barChartBoxRevenue, barChartVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../constant"

const Home = () => {
  return (
    <div className="pl-2 grid grid-cols-4 gap-1.5 auto-rows-[minmax(180px,auto)] h-[90vh] mx-0">
      <div className="border-2 border-soft-bg mx-0! p-2 row-span-3 col-span-1 overflow-hidden">
        <TopDeals/>
      </div>
      <div className="border-2 border-soft-bg mx-0! p-2"><ChartBox {...chartBoxUser}/></div>
      <div className="border-2 border-soft-bg mx-0! p-2"><ChartBox {...chartBoxProduct}/></div>
      <div className="border-2 border-soft-bg mx-0! p-2 row-span-3 col-span-1"><PieChartBox/></div>
      <div className="border-2 border-soft-bg mx-0! p-2"><ChartBox {...chartBoxRevenue}/></div>
      <div className="border-2 border-soft-bg mx-0! p-2"><ChartBox {...chartBoxConversion} /></div>
      <div className="border-2 border-soft-bg mx-0! px-1 py-1 col-span-2 row-span-2 overflow-visible!"><AreaChartBox/></div>
      <div className="border-2 border-soft-bg mx-0! px-1 col-start-1"><BarChartBox {...barChartVisit}/></div>
      <div className="border-2 border-soft-bg mx-0! px-1col-start-4"><BarChartBox {...barChartBoxRevenue} /></div>
    </div>
  )
}

export default Home