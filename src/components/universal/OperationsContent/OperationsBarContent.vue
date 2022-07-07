<template>
  <div class="pt-[68px]">
    <div class="flex items-center pb-2">
      <p class="mb-0 font-bold leading-3 text-xs text-secondary-text pr-[5px]">{{ cardItem.chartTitle }}</p>
      <img v-if="cardItem.info" :src="require('@/assets/img/pages/company/info.svg')" alt="info">
    </div>
    <BarSimpleChart
      class="h-[209px]"
      right-margin="40%"
      :bar-data="[120, 400, 150, 80, 70, 110, 130]"
      max-yaxis="800"
      :border-radius="[5, 5, 0, 0]"
    />
  </div>
</template>

<script>
import BarSimpleChart from "@/components/universal/Charts/BarSimpleChart";
export default {
  name: "OperationsBarContent",
  components: { BarSimpleChart },
  props: {
    cardItem: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
