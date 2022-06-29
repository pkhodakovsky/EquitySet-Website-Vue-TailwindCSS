<template>
  <header
    class="py-3 border-b border-solid border-border lg:h-fit transition-all duration-500 overflow-hidden"
    :class="{
      'h-[48px]': close,
      'h-[331px]': !close
    }"
  >
    <div class="flex flex-col lg:flex-row items-center justify-between max-w-[1680px] px-4 lg:px-8 mx-auto relative">
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

      <div class="flex flex-col lg:flex-row items-center my-4 lg:my-0">
        <div class="lg:mr-8"><Search /></div>

        <Navigation />
      </div>

      <ProfileBtn />
    </div>
  </header>
</template>

<script>
  import Navigation from "@/components/general/Navigation";
  import Search from "@/components/universal/Search";
  import ProfileBtn from "@/components/general/ProfileBtn";

  export default {
    components: {
      ProfileBtn,
      Search,
      Navigation
    },
    data: () => ({
      logo: require('@/assets/img/logos/logo.svg'),
      close: true,
    })
  }
</script>
