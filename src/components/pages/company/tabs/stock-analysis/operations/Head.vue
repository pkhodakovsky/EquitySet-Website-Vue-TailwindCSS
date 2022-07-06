<template>
  <section class="mt-3.5 rounded-[12px] border border-grey-bg-footer pt-2 pb-7 px-3">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <h2 class="font-bold text-[28px] leading-[32px] mr-3">Operations</h2>
        <div class="flex items-center px-3 py-[5px] rounded-[2px] bg-green cursor-pointer">
          <img :src="require('@/assets/img/pages/company/bull-white.svg')" alt="Bull" />
          <p class="text-white font-semibold leading-4 p-0 ml-1">Bullish</p>
        </div>
        <div class="h-5 w-5 cursor-pointer ml-1.5">
          <img
            class="h-full w-full object-contain"
            :src="require('@/assets/img/pages/profile/info-icon.svg')"
            alt="Info icon"
          />
        </div>
      </div>

      <ThreeCircleDropBtn />
    </div>

    <div class="pt-[18px] flex justify-between">
      <div class="max-w-[524px] text-sm leading-4 text-secondary-text">
        What the market is currently paying based on a company's financial prospects, and what the market has been willing to pay in the past.
      </div>

      <div>

      </div>
    </div>
  </section>
</template>

<script>
import ThreeCircleDropBtn from "@/components/universal/ThreeCircleDropBtn";
export default {
  components: {ThreeCircleDropBtn}
}
</script>
