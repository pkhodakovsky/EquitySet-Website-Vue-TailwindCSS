<template>
  <header class="py-3.5 border-b border-solid border-border">
    <div class="flex flex-col lg:flex-row items-center justify-between max-w-[1680px] mx-8">
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
      logo: require('@/assets/img/logos/logo.svg')
    })
  }
</script>
