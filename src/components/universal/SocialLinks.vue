<template>
  <div class="flex items-center">
    <a
      v-for="item in links"
      :key="item.id"
      :href="item.url"
      target="_blank"
      class="ml-7"
    >
      <img :src="item.icon" :alt="item.title" />
    </a>
  </div>
</template>

<script>
  export default {
    data: () => ({
      links: [
        { icon: require('@/assets/img/social-links/facebook.svg'), title: 'Facebook', url: '#', id: '1' },
        { icon: require('@/assets/img/social-links/instagram.svg'), title: 'Instagram', url: '#', id: '2' },
        { icon: require('@/assets/img/social-links/twitter.svg'), title: 'Twitter', url: '#', id: '3' },
        { icon: require('@/assets/img/social-links/git.svg'), title: 'Git', url: '#', id: '4' },
        { icon: require('@/assets/img/social-links/other.svg'), title: 'Other', url: '#', id: '5' },
      ]
    })
  }
</script>
