<template>
  <div class="flex items-center p-1.5 rounded-[12px] bg-search-bg w-[325px] max-w-[90vw]">
    <input
      type="text"
      placeholder="Type “/” to focus"
      class="mr-2 w-full bg-transparent text-nav-grey px-2 py-1 text-sm"
    >

    <div class="h-[32px] w-[32px] rounded-[12px] bg-primary shrink-0 flex items-center justify-center">
      <img
        class="h-4 w-4 object-contain"
        :src="require('@/assets/img/search/search-icon.png')"
        alt="Search icon"
      />
    </div>
  </div>
</template>

<style>
input:focus,
input:hover,
input:active {
  outline: none;
}
</style>
