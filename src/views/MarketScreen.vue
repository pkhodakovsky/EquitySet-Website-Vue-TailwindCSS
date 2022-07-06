<template>
  <div class="max-w-[1492px] mx-auto">
    <Head />

    <Tabs :premium="premium" :options="tabOptions" />

    <components :is="tabOptions.active" />
  </div>
</template>

<script>
import Head from '@/components/pages/market-screen/Head';
import Tabs from '@/components/universal/Tabs';
import Components from '@/components/pages/market-screen/tabs/components/Wrapper';
import Analysis from '@/components/pages/market-screen/tabs/analysis/Wrapper';
import { LAYOUTS } from "@/constants/constants";

export default {
  components: {
    Head,
    Tabs,
    'equityset-analysis': Analysis,
    'components': Components,
  },
  data: () => ({
    tabOptions: {
      active: 'equityset-analysis',
      items: [
        { id: 'components', title: 'Components' },
        { id: 'equityset-analysis', title: 'Equityset Analysis', active: true, premium: true },
      ]
    },
    layouts: LAYOUTS,
  }),
  computed: {
    premium() {
      return this.$route.meta.layout === this.layouts.PREMIUM
    }
  }
}
</script>
