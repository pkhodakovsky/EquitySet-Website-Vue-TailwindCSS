<template>
  <div>
    <Header />

    <RouterPath />

    <main class="max-w-[1680px] px-4 lg:px-8 mx-auto">
      <router-view/>
    </main>

    <Footer />
  </div>
</template>

<script>
  import Header from "@/components/general/Header";
  import Footer from "@/components/general/Footer";
  import RouterPath from "@/components/general/RouterPath";

  export default {
    components: {
      RouterPath,
      Header,
      Footer
    }
  }
</script>
