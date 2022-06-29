<template>
  <div class="w-full lg:w-fit">
    <div class="flex items-end lg:justify-end">
      <div class="flex text-footer-nav mr-3">
        <div class="p-1 text-sm leading-5">$</div>
        <div class="font-bold text-4xl leading-10">293.21</div>
      </div>

      <div class="pl-1 py-0.5 flex items-center text-green">
        <div class="mr-0.5">
          <img :src="require('@/assets/img/pages/company/arrow-up.svg')" alt="Arrow up" />
        </div>

        <div class="text-sm font-medium leading-5">
          <span>3.625$</span> /<span>3.8%</span>
        </div>
      </div>
    </div>

    <div class="flex items-center p-1 mt-2">
      <div class="mr-5 flex items-center">
        <span class="text-xs leading-4 text-secondary-text mr-[3px]">Last Close:</span>
        <span class="leading-none text-footer-nav">$292.92</span>
      </div>

      <div class="flex items-center">
        <div class="h-1.5 w-1.5 rounded-full bg-yellow mr-[5px]"></div>
        <span class="text-xs leading-none font-light text-nav-grey mr-1">Pre Market</span>
        <div>
          <img :src="require('@/assets/img/pages/company/arrow-down.svg')" alt="Arrow down" />
        </div>
        <span class="leading-none text-footer-nav">2.5%</span>
      </div>
    </div>
  </div>
</template>
