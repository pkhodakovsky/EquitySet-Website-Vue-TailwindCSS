<template>
  <div
    class="max-w-[1680px] mx-auto px-4 lg:px-8 py-1.5 text-profile-icon flex items-center flex-wrap"
    :class="{
      'py-2.5': premium,
      'py-1.5': !premium
    }"
  >
    <div v-if="premium">
      <router-link to="/">
        <img :src="require('@/assets/img/components/router-path/home-icon.svg')" alt="home icon" />
      </router-link>
    </div>
    <span v-if="premium" class="mx-4 flex items-center justify-center">
        <img :src="require('@/assets/img/components/router-path/arrow-right-premium.svg')" alt="right arrow" />
      </span>
    <div
      v-for="(item, i) in path"
      :key="item.id"
      class="flex items-center"
      :class="{
        'mr-2': !premium,
      }"
    >
      <div class="flex items-center">
        <router-link
          :class="{
            'text-sm leading-5 font-medium': premium,
            'text-hit-gray': premium && i !== path.length - 1,
            'text-card-text-light': premium && i === path.length - 1,
            'text-xs': !premium
          }"
          :to="item.link"
        >
          {{ item.title }}
        </router-link>

        <span
          v-if="item.children && item.children.length"
          class="relative ml-1 opacity-50"
        >
          <img :src="require('@/assets/img/search/arrow-down.svg')" alt="arrow down" />
        </span>
      </div>

      <span
        v-if="i !== path.length - 1"
        :class="premium ? 'mx-4' : 'ml-2'"
      >
        <img
          v-if="premium"
          :src="require('@/assets/img/components/router-path/arrow-right-premium.svg')"
          alt="right arrow"
        />
        <img
          v-else
          :src="require('@/assets/img/components/router-path/arrow-right.svg')"
          alt="right arrow"
        />
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      premium: {
        type: Boolean,
        default: false
      }
    },
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
