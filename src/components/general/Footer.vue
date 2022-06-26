<template>
  <footer class="max-w-[1680px] px-8 lg:mx-auto pt-14 pb-10">
    <div class="border-t border-solid border-border pt-6">
      <div class="py-2">
        <router-link to="/">
          <img :src="require('@/assets/img/logos/logo.svg')" alt="Logo" />
        </router-link>
      </div>

      <div class="pt-5 pb-14 flex flex-col lg:flex-row items-end justify-between">
        <FooterNav />

        <AppMarkets />
      </div>

      <div class="py-1 flex flex-col lg:flex-row items-center justify-between">
        <div class="flex flex-col lg:flex-row lg:items-center text-sm text-footer-nav">
          <div>
            {{ copyrightText }}
          </div>

          <router-link
            v-for="item in copyrightLinks"
            :key="item.id"
            :to="item.url"
            class="lg:ml-4 mt-1 lg:mt-0"
          >
            {{ item.title }}
          </router-link>
        </div>

        <SocialLinks class="mt-8 lg:mt-0" />
      </div>

      <div class="mt-10 border-t border-solid border-border">
        <p class="py-4 px-2 text-sm text-grey">
          {{ description }}
        </p>

        <div class="text-center p-2 bg-grey-bg-footer text-primary text-xs">
          {{ shortInfo }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import FooterNav from "@/components/general/FooterNav";
  import AppMarkets from "@/components/universal/AppMarkets";
  import SocialLinks from "@/components/universal/SocialLinks";

  export default {
    components: {
      SocialLinks,
      AppMarkets,
      FooterNav
    },
    data: () => ({
      copyrightText: '©2022 Equityset, Inc. All rights reserved',
      copyrightLinks: [
        { title: 'Privacy Policy', url: '/', id: '1' },
        { title: 'Terms of Service', url: '/', id: '2' },
        { title: 'Sitemap', url: '/', id: '3' },
      ],
      description: 'Disclaimers: EquitySet LLC is not operated by a broker, a dealer, or a registered investment adviser. Under no circumstances does any information posted on EquitySet LLC represent an individualized recommendation to buy or sell a security. The information on this site, and in its related emails and newsletters, is not intended to be, nor does it constitute individual investment advice or recommendations. The users may buy and sell securities before and after any particular article and report and information herein is published, with respect to the securities discussed in any article and report posted herein. In no event shall EquitySet LLC be liable to any member, guest or third party for any damages of any kind arising out of the use of any content or other material published or available on EquitySet LLC, or relating to the use of, or inability to use, equitysetdata.com or any content, including, without limitation, any investment losses, lost profits, lost opportunity, special, incidental, indirect, consequential or punitive damages. Past performance is a poor indicator of future performance. The information on this site is in no way guaranteed for completeness, accuracy or in any other way. The companies listed on this website are not affiliated with EquitySet LLC .',
      shortInfo: 'Equityset does not provide individualized investment advice or recommendations for individual portfolios.'
    })
  }
</script>
