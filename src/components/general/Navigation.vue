<template>
  <nav>
    <ul class="flex flex-col lg:flex-row items-center">
      <li v-for="item in items" :key="item.id" class="mx-[6px] relative flex items-center">
        <router-link
          :to="item.url"
          class="p-2 text-xs font-medium"
          :class="{
            'text-nav-grey': $route.path !== item.url,
            'text-primary': $route.path === item.url
          }"
        >
          {{ item.title }}
        </router-link>

        <span
          v-if="item.children && item.children.length"
          class="relative top-0.5"
        >
          <img :src="require('@/assets/img/search/arrow-down.svg')" alt="arrow down" />
        </span>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { id: '1', title: 'Today', url: '/' },
        { id: '2', title: 'Markets', url: '/markets' },
        { id: '3', title: 'Screener', url: '/screener' },
        { id: '4', title: 'Ideas', url: '/ideas' },
        {
          id: '5',
          title: 'Learn',
          url: '/learn',
          children: [
            { id: '5-1', title: 'Documentation', url: '/doc' },
          ]
        },
      ]
    })
  }
</script>
