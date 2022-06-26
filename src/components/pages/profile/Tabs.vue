<template>
  <div class="flex flex-row items-center border-b border-solid border-border overflow-auto">
    <div
      v-for="item in items"
      :key="item.id"
      class="pt-6 pb-5 px-1 mx-5 font-medium cursor-pointer whitespace-nowrap text-sm leading-4"
      :class="{
        'text-tabs': !item.active,
        'text-primary border-b border-solid border-primary': item.active
      }"
      @click="changeTab(item.id)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { id: 'profile', title: 'Profile', },
        { id: 'pricing-billing', title: 'Pricing & Billing' },
        { id: 'notification-alerts', title: 'Notification & Alerts', active: true },
        { id: 'my-portfolio', title: 'My portofolio' },
      ]
    }),
    methods: {
      changeTab(id) {
        this.items = this.items.map(item => id === item.id ? { ...item, active: true } : { ...item, active: false })
        this.$emit('changeTab', id)
      }
    }
  }
</script>
