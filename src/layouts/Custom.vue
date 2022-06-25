<template>
  <div>
    <Header />

    <RouterPath />

    <main class="max-w-[1680px] px-8">
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
