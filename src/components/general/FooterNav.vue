<template>
  <div
    class="flex flex-row"
    :class="{
      'flex-wrap': !premium,
    }"
  >
    <div
      v-for="item in premium ? itemsPremium : itemsDefault"
      :key="item.id"
      class="w-[50%] mb-8 lg:mb-0"
      :class="{
        'lg:w-[217px] lg:mr-8': !premium,
        'lg:min-w-[217px] whitespace-nowrap lg:mr-20': premium
      }"
    >
      <h3
        class="font-bold"
        :class="{
          'leading-none font-open-sans mb-6 text-[13px]': premium,
          'text-sm text-footer-nav': !premium
        }"
      >
        {{ item.title }}
      </h3>

      <ul class="flex flex-col">
        <li
          v-for="link in item.links"
          :key="link.id"
          class="mt-2 text-xs"
          :class="{
            'text-footer-nav': !premium,
            'leading-none font-open-sans text-[13px]': premium
          }"
        >
          <router-link :to="link.url">{{ link.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      premium: { type: Boolean, default: false }
    },
    data: () => ({
      itemsDefault: [
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
      ],
      itemsPremium: [
        {
          id: '1',
          title: 'Support',
          links: [
            { id: '1-1', title: 'Service Status', url: '/' },
            { id: '1-2', title: 'Help Center', url: '/' },
            { id: '1-3', title: 'Supporting people with disabilities (TBD)', url: '/' },
            { id: '1-4', title: 'Report concern or issue', url: '/' }
          ]
        },
        {
          id: '2',
          title: 'Product',
          links: [
            { id: '2-1', title: 'Pricing Plans', url: '/' },
            { id: '2-2', title: 'Stocks Screener', url: '/' },
            { id: '2-3', title: 'Markets', url: '/' },
            { id: '2-4', title: 'Investing Themes', url: '/' },
            { id: '2-5', title: 'Product Features', url: '/' }
          ]
        },
        {
          id: '3',
          title: 'About',
          links: [
            { id: '3-1', title: 'About us', url: '/' },
            { id: '3-2', title: 'Contact', url: '/' },
            { id: '3-3', title: 'Letter from our Founders', url: '/' },
            { id: '3-4', title: 'Accessibiliy', url: '/' },
            { id: '3-5', title: 'Newsroom(TBD)', url: '/' },
            { id: '3-6', title: 'Investors (TBD)', url: '/' },
          ]
        },
        {
          id: '4',
          title: 'Education',
          links: [
            { id: '4-1', title: 'Newsletter', url: '/' },
            { id: '4-2', title: 'Market News', url: '/' },
            { id: '4-3', title: 'Trading Safely (TBD)', url: '/' },
            { id: '4-4', title: 'Documentation', url: '/' }
          ]
        }
      ]
    })
  }
</script>
