<template>
  <div class="flex flex-wrap items-center">
    <div
      v-for="item in navItems.items"
      :key="item.id"
      class="px-2 py-[9px] rounded-[6px] mr-[18px] cursor-pointer transition-all duration-500"
      :class="{ 'bg-grey-bg-footer': item.active }"
      @click="changeActiveItem(item.id)"
    >
      <span class="text-sm leading-5 font-medium" :class="item.active ? 'text-footer-nav' : 'text-grey'">
        {{ item.title }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      navItems: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      changeActiveItem(id) {
        if(this.navItems.active === id) return
        this.$router.push({ path: '/company', query: { ...this.$route.query, stock: id  } })
        this.$emit('changeNavBarItem', id)
      }
    }
  }
</script>
