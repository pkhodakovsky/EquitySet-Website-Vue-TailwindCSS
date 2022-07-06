<template>
  <div
    class="flex items-center p-1.5 max-w-[90vw]"
    :class="{
      'bg-white rounded-[106px] w-[233px]': premium,
      'bg-search-bg rounded-[12px] w-[325px]': !premium
    }"
  >
    <input
      type="text"
      placeholder="Type “/” to focus"
      class="mr-2 w-full bg-transparent px-2 py-1"
      :class="{
        'text-xs text-jungle-mist leading-4 font-open-sans font-semibold': premium,
        'text-sm text-nav-grey': !premium
      }"
    >

    <div
      class="h-[31px] w-[31px] shrink-0 flex items-center justify-center"
      :class="{
        'rounded-[15px] bg-disabled-input-text': premium,
        'rounded-[12px] bg-primary': !premium
      }"
    >
      <img
        class="h-4 w-4 object-contain"
        :src="require('@/assets/img/search/search-icon.png')"
        alt="Search icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    premium: { type: Boolean, default: false }
  }
}
</script>

<style>
input:focus,
input:hover,
input:active {
  outline: none;
}
</style>
