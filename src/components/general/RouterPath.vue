<template>
  <div class="max-w-[1680px] px-8 py-3 text-profile-icon flex">
    <div
      v-for="(item, i) in path"
      :key="item.id"
      class="mr-2"
    >
      <router-link :to="item.link">{{ item.title }}</router-link>

      <span v-if="i !== path.length - 1" class="ml-2">{{ '>' }}</span>
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
