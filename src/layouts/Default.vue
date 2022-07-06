<template>
  <div>
    <Header :premium="premium" />
    <RouterPath :premium="premium" />

    <main class="max-w-[1680px] px-4 lg:px-8 mx-auto">
      <router-view/>
    </main>

    <Footer :premium="premium" />
  </div>
</template>

<script>
  import Header from "@/components/general/Header";
  import Footer from "@/components/general/Footer";
  import RouterPath from "@/components/general/RouterPath";
  import { LAYOUTS } from "@/constants/constants";

  export default {
    components: {
      RouterPath,
      Header,
      Footer
    },
    data: () => ({
      layouts: LAYOUTS,
    }),
    computed: {
      premium() {
        return this.$route.meta.layout === this.layouts.PREMIUM
      }
    }
  }
</script>
