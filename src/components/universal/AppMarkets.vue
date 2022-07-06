<template>
  <div
    class="flex w-full"
    :class="{
      'lg:flex-col justify-between lg:w-fit': !premium,
      'border-b border-athens-gray w-full pb-1': premium
    }"
  >
    <a
      v-for="item in appMarkets"
      :key="item.id"
      :href="item.url"
      target="_blank"
      class="mt-4"
      :class="{ 'mx-1': premium }"
    >
      <img :src="premium ? item.imgPremium : item.img" :alt="item.title"/>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      premium: { type: Boolean, default: false }
    },
    data: () => ({
      appMarkets: [
        {
          id: '1',
          url: '#',
          img: require('@/assets/img/app-markets/app-store.svg'),
          imgPremium: require('@/assets/img/app-markets/apple-premium.png'),
          title: 'Apple App Store'
        },
        {
          id: '2',
          url: '#',
          img: require('@/assets/img/app-markets/google-play.svg'),
          imgPremium: require('@/assets/img/app-markets/google-premium.png'),
          title: 'Google play'
        },
      ]
    })
  }
</script>
