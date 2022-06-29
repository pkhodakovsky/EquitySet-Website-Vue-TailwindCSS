<template>
  <div class="max-w-[1680px] mx-auto px-4 lg:px-8 py-1.5 text-profile-icon flex flex-wrap">
    <div
      v-for="(item, i) in path"
      :key="item.id"
      class="mr-2 flex items-center"
    >
      <div class="flex items-center">
        <router-link class="text-xs" :to="item.link">{{ item.title }}</router-link>

        <span
            v-if="item.children && item.children.length"
            class="relative ml-1 opacity-50"
        >
          <img :src="require('@/assets/img/search/arrow-down.svg')" alt="arrow down" />
        </span>
      </div>

      <span v-if="i !== path.length - 1" class="ml-2">
        <img :src="require('@/assets/img/components/router-path/arrow-right.svg')" alt="right arrow" />
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      path: [
        { title: 'Markets', link: '/', id: '1' },
        { title: 'NASDAQ', link: '/', children: ['1'], id: '2' },
        { title: 'Technology', link: '/', children: ['1'], id: '3' },
        { title: 'Wireless Mobile Equipment', link: '/', children: ['1'], id: '4' },
      ]
    })
  }
</script>
