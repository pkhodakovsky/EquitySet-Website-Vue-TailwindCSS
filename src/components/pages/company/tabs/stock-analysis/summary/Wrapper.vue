<template>
  <div>
    <AtGlance class="mt-5" />
    <Model />
    <PriceChart />
    <Ratings class="pb-[73px]" />
    <Operations />
    <Valuation class="mt-[68px]" />
    <Structure class="mt-[66px]" />
    <Technicals class="mt-16" />
    <Dividends class="mt-[66px]" />
    <MarketDynamics class="mt-[66px]" />
    <CashManagement class="mt-[85px]" />
  </div>
</template>

<script>
import AtGlance from "@/components/pages/company/tabs/stock-analysis/summary/AtGlance";
import Model from "@/components/pages/company/tabs/stock-analysis/summary/Model";
import Ratings from "@/components/pages/company/tabs/stock-analysis/summary/Ratings";
import PriceChartWrapper from "@/components/universal/Charts/PriceChartWrapper";
import PriceChart from "@/components/pages/company/tabs/stock-analysis/summary/PriceChart";
import Valuation from "@/components/pages/company/tabs/stock-analysis/summary/Valuation";
import Structure from "@/components/pages/company/tabs/stock-analysis/summary/Structure";
import Technicals from "@/components/pages/company/tabs/stock-analysis/summary/Technicals";
import Dividends from "@/components/pages/company/tabs/stock-analysis/summary/Dividends";
import Operations from "@/components/pages/company/tabs/stock-analysis/summary/Operations";
import MarketDynamics from "@/components/pages/company/tabs/stock-analysis/summary/MarketDynamics";
import CashManagement from "@/components/pages/company/tabs/stock-analysis/summary/CashManagement";

export default {
  components: {
    CashManagement,
    MarketDynamics,
    Dividends,
    Technicals,
    Structure,
    Valuation,
    PriceChart,
    PriceChartWrapper,
    Ratings,
    Model,
    AtGlance,
    Operations,
  }
}
</script>
