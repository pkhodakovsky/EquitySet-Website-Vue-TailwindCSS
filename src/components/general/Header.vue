<template>
  <header
    class="py-3 lg:h-fit transition-all duration-500 overflow-hidden"
    :class="{
      'h-[48px]': close,
      'h-[331px]': !close,
      'bg-alabaster': premium,
      'border-b border-border': !premium
    }"
  >
    <div class="flex flex-col lg:flex-row lg:items-center justify-between max-w-[1680px] px-4 lg:px-8 mx-auto relative">
      <div
        class="h-4 w-5 flex flex-col justify-between items-center absolute right-4 top-0 lg:hidden"
        @click="close = !close"
      >
        <span
          v-for="item in 3"
          :key="item"
          class="w-full h-0.5 bg-primary"
        ></span>
      </div>

      <div>
        <router-link to="/">
          <img :src="logo" alt="Logo" />
        </router-link>
      </div>

      <div
        class="flex flex-col lg:flex-row items-center my-4 lg:my-0"
        :class="{
          'lg:w-full lg:pl-[134px]': premium,
        }"
      >
        <div class="lg:mr-8"><Search :premium="premium" /></div>

        <Navigation :premium="premium" />
      </div>

      <ProfileBtn :premium="premium" />
    </div>
  </header>
</template>

<script>
  import { LAYOUTS } from "@/constants/constants";
  import Navigation from "@/components/general/Navigation";
  import Search from "@/components/universal/Search";
  import ProfileBtn from "@/components/general/ProfileBtn";

  export default {
    components: {
      ProfileBtn,
      Search,
      Navigation
    },
    props: {
      premium: { type: Boolean, default: false },
    },
    data: () => ({
      close: true,
      layouts: LAYOUTS
    }),
    computed: {
      logo() {
        return this.premium ? require('@/assets/img/logos/logo-premium.svg') : require('@/assets/img/logos/logo.svg')
      }
    }
  }
</script>
