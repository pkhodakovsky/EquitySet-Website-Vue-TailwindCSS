<template>
  <div class="pt-[9px] pb-3 px-2 lg:px-5 flex flex-col lg:flex-row lg:items-center justify-between bg-icon-bg">
    <NavBarItems @changeNavBarItem="changeNavBarItem" :nav-items="navItems" />

    <div class="flex items-center">
      <TimeSelect class="mr-5" :items="period" :selected="'Last 5 Years'" />

      <div v-if="navItems.active === 'operations'" class="mr-5 flex items-center">
        <span class="mr-3.5 text-grey text-sm leading-5 font-medium">Show Competition</span>
        <SwitchCheckbox :active="true" />
      </div>

      <ThreeCircleDropBtn />
    </div>
  </div>
</template>

<script>
import NavBarItems from "@/components/pages/company/tabs/stock-analysis/summary/NavBarItems";
import TimeSelect from "@/components/universal/TimeSelect";
import ThreeCircleDropBtn from "@/components/universal/ThreeCircleDropBtn";
import SwitchCheckbox from "@/components/universal/SwitchCheckBox";

export default {
  components: {
    SwitchCheckbox,
    ThreeCircleDropBtn,
    TimeSelect,
    NavBarItems
  },
  props: {
    navItems: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    period: [
      'Last 1 year',
      'last 2 years',
      'last 3 years',
      'last 4 years',
      'last 5 years',
      'last 6 years',
    ],
  }),
  methods: {
    changeNavBarItem(id) {
      this.$emit('changeNavBarItem', id)
    },
  }
}
</script>
