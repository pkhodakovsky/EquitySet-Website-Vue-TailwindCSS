<template>
  <div class="cursor-pointer relative">
    <div class="px-1.5" @click="open = !open">
      <img :src="require('@/assets/img/components/card/card-drop-btn.svg')" alt="Card drop btn" />
    </div>

    <div
      v-if="items && items.length"
      class="absolute bg-white shadow-lg rounded-[6px] right-0 top-full z-20 border-t border-athens-gray-second"
      :class="{ hidden: !open }"
      @click="open = false"
    >
      <div class="pl-4 pr-2 py-3.5 cursor-auto">
        <div
            v-for="(item, i) in items"
            :key="item.id"
            class="flex items-center cursor-pointer"
            :class="{ 'mb-4': i !== items.length - 1 }"
        >
          <div class="h-5 w-5">
            <img :src="item.icon" :alt="`${item.title} icon`" />
          </div>

          <span class="ml-2 text-sm leading-5 text-oxford-blue whitespace-nowrap">{{ item.title }}</span>

          <div
              v-if="item.needPremium"
              class="ml-4 px-0.5 py-0 rounded-[2px] bg-mischka flex items-center justify-center"
          >
            <span class="text-icon-bg text-[10px] leading-4 font-bold">Premium</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      open: false,
      items: [
        {
          id: '1',
          title: 'Customize Page',
          icon: require('@/assets/img/components/three-circle-drop-btn/customize-page.svg'),
          needPremium: true
        },
        {
          id: '2',
          title: 'Export to PDF',
          icon: require('@/assets/img/components/three-circle-drop-btn/export.svg'),
          needPremium: false
        },
      ]
    })
  }
</script>
