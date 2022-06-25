<template>
  <div class="max-w-[1492px] mx-auto pt-[100px] pb-[240px]">
    <Main />
    <Tabs class="mt-[70px] mb-10" @changeTab="changeTab" />

    <div class="px-10 pt-4 pb-10 rounded-[12px] bg-icon-bg">
      <components :is="activeTab" />
    </div>
  </div>
</template>

<script>
  import Main from "@/components/pages/profile/Main";
  import Tabs from "@/components/pages/profile/Tabs";
  import Profile from "@/components/pages/profile/Profile"
  import PricingBilling from "@/components/pages/profile/PricingBilling"
  import NotificationAlerts from "@/components/pages/profile/NotificationAlerts"
  import MyPortfolio from "@/components/pages/profile/MyPortfolio"

  export default {
    components: {
      Main,
      Tabs,
      'profile': Profile,
      'pricing-billing': PricingBilling,
      'notification-alerts': NotificationAlerts,
      'my-portfolio': MyPortfolio
    },
    data: () => ({
      activeTab: 'notification-alerts',
    }),
    methods: {
      changeTab(id) {
        this.activeTab = id
      }
    }
  }
</script>
