<template>
  <div class="flex items-center">
    <div class="shrink-0 flex items-center mr-5">
      <div class="shrink-0 mr-4">
        <img :src="require('@/assets/img/pages/company/company-icon.png')" alt="Company icon" />
      </div>

      <div>
        <h1 class="font-bold text-xl lg:text-4xl leading-4 lg:leading-10 text-footer-nav">Tesla Inc.</h1>
        <p class="font-bold text-base lg:text-lg text-nav-grey leading-6">TSLA</p>
      </div>
    </div>

    <div class="lg:w-[235px] lg:h-[65px]">
      <img
        class="h-full w-full object-contain"
        :src="require('@/assets/img/pages/company/chart-image.png')"
        alt="Chart image"
      />
    </div>
  </div>
</template>
