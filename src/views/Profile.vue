<template>
  <div class="max-w-[1492px] mx-auto pt-5 lg:pt-[104px] pb-5 lg:pb-[180px]">
    <Main />
    <Tabs class="mt-[70px] mb-10" :options="tabOptions" />

    <div class="px-2 lg:px-10 pt-4 pb-10 rounded-[12px] bg-icon-bg">
      <components :is="tabOptions.active" />
    </div>
  </div>
</template>

<script>
  import Main from "@/components/pages/profile/Main";
  import Tabs from "@/components/universal/Tabs";
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
      tabOptions: {
        active: 'notification-alerts',
        items: [
          { id: 'profile', title: 'Profile', },
          { id: 'pricing-billing', title: 'Pricing & Billing' },
          { id: 'notification-alerts', title: 'Notification & Alerts', active: true },
          { id: 'my-portfolio', title: 'My portofolio' },
        ]
      }
    }),
  }
</script>
