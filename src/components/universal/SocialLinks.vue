<template>
  <div class="flex items-center">
    <a
      v-for="(item, i) in links"
      :key="item.id"
      :href="item.url"
      target="_blank"
      :class="{
        'ml-7': i,
        'h-5 w-5': !premium,
        'h-6 w-6 opacity-70': premium
      }"
    >
      <img class="h-full w-full object-contain" :src="item.icon" :alt="item.title" />
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      premium: { type: Boolean, default: false }
    },
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
