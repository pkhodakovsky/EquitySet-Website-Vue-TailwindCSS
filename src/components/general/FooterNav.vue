<template>
  <div class="flex flex-col lg:flex-row">
    <div v-for="item in items" :key="item.id" class="w-[217px] mr-8 mb-8 lg:mb-0">
      <h3 class="font-bold text-sm">{{ item.title }}</h3>

      <ul class="flex flex-col">
        <li v-for="link in item.links" :key="link.id" class="mt-2 text-xs text-footer-nav">
          <router-link :to="link.url">{{ link.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          id: '1',
          title: 'Support',
          links: [
            { id: '1-1', title: 'Pricing', url: '/' },
            { id: '1-2', title: 'Documentation', url: '/' },
            { id: '1-3', title: 'Guides', url: '/' },
            { id: '1-4', title: 'API Status', url: '/' }
          ]
        },
        {
          id: '2',
          title: 'Product',
          links: [
            { id: '2-1', title: 'Pricing', url: '/' },
            { id: '2-2', title: 'Documentation', url: '/' },
            { id: '2-3', title: 'Guides', url: '/' },
            { id: '2-4', title: 'API Status', url: '/' }
          ]
        },
        {
          id: '3',
          title: 'Education',
          links: [
            { id: '3-1', title: 'Pricing', url: '/' },
            { id: '3-2', title: 'Documentation', url: '/' },
            { id: '3-3', title: 'Guides', url: '/' },
            { id: '3-4', title: 'API Status', url: '/' }
          ]
        },
        {
          id: '4',
          title: 'About',
          links: [
            { id: '4-1', title: 'Pricing', url: '/' },
            { id: '4-2', title: 'Documentation', url: '/' },
            { id: '4-3', title: 'Guides', url: '/' },
            { id: '4-4', title: 'API Status', url: '/' }
          ]
        }
      ]
    })
  }
</script>
