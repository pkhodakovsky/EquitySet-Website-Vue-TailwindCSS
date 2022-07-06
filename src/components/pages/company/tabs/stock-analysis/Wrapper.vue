<template>
  <div class="mt-[3px]">
    <NavBar @changeNavBarItem="changeNavBarItem" />

    <components :is="navBarActive" />
  </div>
</template>

<script>
  import NavBar from "@/components/pages/company/tabs/stock-analysis/NavBar";
  import Summary from "@/components/pages/company/tabs/stock-analysis/summary/Wrapper";
  import Operations from "@/components/pages/company/tabs/stock-analysis/operations/Wrapper";

  export default {
    components: {
      NavBar,
      'summary-section': Summary,
      'operations': Operations,
    },
    data: () => ({
      navBarActive: 'summary-section'
    }),
    methods: {
      changeNavBarItem(id) {
        this.navBarActive = id
      }
    }
  }
</script>
