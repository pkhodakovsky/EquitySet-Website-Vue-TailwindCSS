<template>
  <div class="max-w-[1680px] mx-auto px-4 lg:px-8 py-1.5 text-profile-icon flex">
    <div
      v-for="(item, i) in path"
      :key="item.id"
      class="mr-2 flex items-center"
    >
      <router-link class="text-xs" :to="item.link">{{ item.title }}</router-link>

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
        { title: 'Profile', link: '/', id: '2' },
      ]
    })
  }
</script>
