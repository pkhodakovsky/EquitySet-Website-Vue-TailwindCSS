<template>
  <div
    :class="{
      'bg-alabaster': premium,
    }"
  >
    <footer
      class="max-w-[1680px] px-8 lg:mx-auto pb-10"
      :class="{
        'pt-8': premium,
        'pt-14': !premium
      }"
    >
      <div v-if="!premium" class="flex justify-end mr-3 lg:mr-28 mb-3">
        <button @click="scrollToTop">
          <img :src="require('@/assets/img/icons/button-up.svg')" alt="profile icon" />
        </button>
      </div>
      <div v-if="premium" class="border-t border-jungle-mist mb-[1px]"></div>
      <div class="border-t border-border pt-6"
        :class="{
          'border-border': !premium,
          'border-jungle-mist': premium
        }"
      >
        <div class="py-2">
          <router-link to="/">
            <img :src="logo" alt="Logo" />
          </router-link>
        </div>

        <div :class="{ 'px-4': premium }">
          <div
            class="pt-5"
            :class="{
              'flex flex-col lg:flex-row items-end justify-between pb-14': !premium,
            }"
          >
            <FooterNav :premium="premium" />

            <AppMarkets :premium="premium" />
          </div>

          <div class="py-1 flex flex-col lg:flex-row items-center justify-between">
            <SocialLinks v-if="premium" :premium="premium" class="mt-8 lg:mt-0 opacity-0 invisible" />
            <div
              class="flex flex-col lg:flex-row lg:items-center justify-self-center"
              :class="{
                'text-[11px] leading-none font-open-sans font-semibold text-disabled-input-text': premium,
                'text-sm text-footer-nav': !premium
              }"
            >
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

            <SocialLinks :premium="premium" class="mt-8 lg:mt-0" />
          </div>

          <div
            :class="{
              'border-t border-border mt-10': !premium,
            }"
          >
            <p
              class="py-4 px-2 text-sm"
              :class="{
                'text-grey': !premium,
                'leading-3.5 font-open-sans text-jungle-mist pt-0.5': premium
              }"
            >
              {{ description }}
            </p>

            <div
              class="text-center"
              :class="{
                'p-2 bg-grey-bg-footer text-primary text-xs': !premium,
                'bg-athens-gray text-sm leading-5 font-ubuntu text-disabled-input-text': premium
              }"
            >
              {{ shortInfo }}
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
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
    props: {
      premium: { type: Boolean, default: false },
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
    }),
    computed: {
      logo() {
        return this.premium
          ? require('@/assets/img/logos/logo-footer-premium.svg') : require('@/assets/img/logos/logo.svg')
      }
    },
    methods: {
      scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }
</script>
