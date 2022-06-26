<template>
  <div class="flex lg:flex-col justify-between w-full lg:w-fit">
    <a
      v-for="item in appMarkets"
      :key="item.id"
      :href="item.url"
      target="_blank"
      class="mt-4"
    >
      <img :src="item.img" :alt="item.title"/>
    </a>
  </div>
</template>

<script>
  export default {
    data: () => ({
      appMarkets: [
        { id: '1', url: '#', img: require('@/assets/img/app-markets/app-store.svg'), title: 'Apple App Store' },
        { id: '2', url: '#', img: require('@/assets/img/app-markets/google-play.svg'), title: 'Google play' },
      ]
    })
  }
</script>
