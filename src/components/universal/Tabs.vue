<template>
  <div class="flex flex-wrap flex-row items-center border-b border-solid border-border">
    <div
        v-for="item in options.items"
        :key="item.id"
        class="pt-6 pb-5 px-1 mr-5 lg:mx-5 font-medium cursor-pointer text-sm leading-4"
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
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    changeTab(id) {
      this.options.items = this.options.items.map(item => id === item.id ? { ...item, active: true } : { ...item, active: false })
      this.options.active = id
    }
  }
}
</script>
