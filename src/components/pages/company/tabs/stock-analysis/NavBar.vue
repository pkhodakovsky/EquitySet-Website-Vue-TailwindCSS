<template>
  <div class="pt-[9px] pb-3 px-2 lg:px-5 flex flex-col lg:flex-row lg:items-center justify-between bg-icon-bg">
    <NavBarItems @changeNavBarItem="changeNavBarItem" :nav-items="navItems" />

    <div class="flex items-center">
      <TimeSelect class="mr-6" :items="period" :selected="'Last 5 Years'" />

      <ThreeCircleDropBtn />
    </div>
  </div>
</template>

<script>
  import NavBarItems from "@/components/pages/company/tabs/stock-analysis/summary/NavBarItems";
  import TimeSelect from "@/components/universal/TimeSelect";
  import ThreeCircleDropBtn from "@/components/universal/ThreeCircleDropBtn";

  export default {
    components: {
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
      }
    }
  }
</script>
