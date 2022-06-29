<template>
  <div class="border border-athens-gray rounded-[32px] p-0.5 flex items-center">
    <div
      v-for="item in items"
      :key="item.id"
      class="py-1 px-2 rounded-[49px] transition-all duration-500 flex items-center cursor-pointer"
      :class="item.active ? 'text-white bg-primary' : 'text-grey'"
      @click="changeTab(item.id)"
    >
      <span class="text-[10px] lg:text-xs leading-4 font-medium">{{ item.title }}</span>

      <span
        v-if="item.children && item.children.length"
        class="ml-1.5"
      >
        <img :src="require('@/assets/img/search/arrow-down.svg')" alt="arrow down" />
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { id: '1', title: '1D', children: [], active: false },
        { id: '2', title: '7D', children: [], active: false },
        { id: '3', title: '1M', children: [], active: false },
        { id: '4', title: '3M', children: [], active: false },
        { id: '5', title: 'Last Years', children: [], active: true },
        { id: '6', title: '1Y', children: [], active: false },
        { id: '7', title: 'YTD', children: [], active: false },
        { id: '8', title: 'Custom', children: ['', ''], active: false },
      ]
    }),
    methods: {
      changeTab(id) {
        this.items = this.items.map(item => item.id === id ? { ...item, active: true } : { ...item, active: false })
      }
    }
  }
</script>
