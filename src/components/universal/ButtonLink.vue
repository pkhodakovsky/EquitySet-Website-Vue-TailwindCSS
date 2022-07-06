<template>
  <router-link :to="link">
    <button class="underline text-primary text-xs leading-4 font-medium">
    {{ textContent }}
    </button>
  </router-link>
</template>

<script>
export default {
  name: "ButtonLink",
  props: {
    link: {
      type: String,
      default: ''
    },
    textContent: {
      type: String,
      default: ''
    }
  }
}
</script>
