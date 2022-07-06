<template>
  <div>
    <div v-for="item in gaugeSection" class="w-6/12  mx-auto border-b-[1px] last-of-type:border-0 border-mischka flex items-center justify-between pb-2 mb-2">
      <div class="flex items-center">
        <span :style="{ backgroundColor: item.color || '#2563EB' }" class="w-[14px] h-[14px] inline-block rounded-full" />
        <p :style="{ color: item.color }" class="pl-[3px] font-medium text-[10px] leading-3">{{ item.title || 'Unknown' }}</p>
      </div>
      <p class="font-bold text-sm leading-[14px] mb-0">{{ item.price || '$0' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GaugeInfo",
  props: {
    gaugeSection: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
