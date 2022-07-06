<template>
  <div>
    <div class="flex lg:items-center justify-between mb-0">
      <div class="mb-6 flex flex-col lg:flex-row lg:items-center">
        <SwitchTimePeriod @changePeriod="changePeriod" class="mb-4 lg:mb-0" />

        <div class="text-xs leading-4 flex items-center">
          <div class="ml-2">
            <span class="text-secondary-text">Open:</span>
            <span class="ml-[3px] text-footer-nav">$292.92</span>
          </div>

          <div class="ml-3">
            <span class="text-secondary-text">Close:</span>
            <span class="ml-[3px] text-footer-nav">$292.92</span>
          </div>

          <div class="ml-3">
            <span class="text-secondary-text">Diff.:</span>
            <span class="ml-[3px] text-japanese-laurel">%2.10</span>
          </div>
        </div>
      </div>

      <div class="shrink-0 h-[30px] lg:h-auto flex items-center">
        <ThreeCircleDropBtn />
      </div>
    </div>

    <div class="pl-1 relative right-2 w-[102%]">
      <slot />
    </div>

    <TagCharts :title="'Fair Value'" :checkBox="tagCharts" />
  </div>
</template>

<script>
  import ThreeCircleDropBtn from "@/components/universal/ThreeCircleDropBtn";
  import SwitchTimePeriod from "@/components/universal/SwitchTimePeriod";
  import SwitchCheckBox from "@/components/universal/SwitchCheckBox";
  import TagCharts from "@/components/universal/Charts/TagCharts";
  import AxiosService from "@/services/axios.service";

  export default {
    components: {
      TagCharts,
      SwitchCheckBox,
      SwitchTimePeriod,
      ThreeCircleDropBtn
    },
    data: () => ({
      tagCharts: { title: 'RatingChanges', active: false }
    }),
    watch: {
      'tagCharts.active'(value) {
        this.$emit('toggle-checkbox', value)
      }
    },
    methods: {
      async changePeriod(val) {
        const { data } = await AxiosService.get(val)
        this.$emit('stepLineData', data)
      }
    },
    async mounted() {
      await this.changePeriod('5y')
    }
  }
</script>
