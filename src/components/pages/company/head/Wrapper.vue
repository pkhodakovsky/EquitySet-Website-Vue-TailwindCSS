<template>
  <section class="pb-10">
    <div class="text-right p-2 text-xs leading-none text-time-grey">Updated: 03 Mar, 2022. 21:00</div>

    <div class="pt-4 lg:pt-[29px]">
      <div class="w-fit flex items-center p-1 pl-[5px] text-primary text-xs font-medium cursor-pointer">
        <img
          :src="require('@/assets/img/pages/company/add-to-watchlist.svg')"
          alt="Add to watchlist icon"
          class="mr-[5px] shrink-0"
        />
        <span class="underline">Add to watchlist</span>
      </div>

      <div class="pt-3 flex flex-col lg:flex-row items-center lg:justify-between">
        <Title class="mb-5 lg:mb-0" />

        <Statistics />
      </div>

      <div class="pt-3 flex flex-col lg:flex-row lg:items-center justify-between">
        <div class="mb-4 lg:mb-0">
          <div class="p-1">
            <router-link
              to="/"
              class="text-xs leading-4 underline text-footer-nav font-medium"
            >
              Company Description
            </router-link>
          </div>

          <div class="text-xs leading-4 flex flex-col lg:flex-row">
            <div class="mr-5">
              <span class="text-secondary-text mr-[3px]">Selector:</span>
              <span class="text-footer-nav">Electronic Technologies</span>
            </div>

            <div>
              <span class="text-secondary-text mr-[3px]">Industry:</span>
              <span class="text-footer-nav">Telecommunications Equipment</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col lg:flex-row">
          <div
            class="py-2 border border-solid border-grey-bg-footer rounded-[4px] mr-6 mb-4 lg:mb-0 w-full lg:w-fit"
          >
            <div class="flex justify-between lg:justify-start">
              <div class="px-4 border-r border-solid border-grey-bg-footer w-1/3 lg:w-auto">
                <div class="text-[10px] lg:text-xs leading-4 text-secondary-text">P/E</div>
                <div class="text-footer-nav leading-none mt-1">27.07</div>
              </div>

              <div class="px-4 border-r border-solid border-grey-bg-footer w-1/3 lg:w-auto">
                <div class="text-[10px] lg:text-xs leading-4 text-secondary-text">Market Cap</div>
                <div class="text-footer-nav leading-none mt-1">$2.718T</div>
              </div>

              <div class="px-4 w-1/3 lg:w-auto">
                <div class="text-[10px] lg:text-xs leading-4 text-secondary-text">Sales Growth (1y)</div>
                <div class="text-footer-nav leading-none mt-1">7.5%</div>
              </div>
            </div>
          </div>

          <div class="py-2 border border-solid border-grey-bg-footer rounded-[4px]">
            <div class="flex">
              <div class="w-1/2 lg:w-auto px-4 border-r border-solid border-grey-bg-footer">
                <div class="text-[10px] lg:text-xs leading-4 text-secondary-text">Stock Price Rating</div>
                <div class="text-sm font-medium leading-4 text-red mt-1 flex items-center">
                  <img :src="require('@/assets/img/pages/company/bear.svg')" alt="Bear icon" class="mr-1" />
                  <span>Bearish</span>
                </div>
              </div>

              <div class="w-1/2 lg:w-auto px-4">
                <div class="text-[10px] lg:text-xs leading-4 text-secondary-text">Fair Value Distance</div>
                <div class="text-sm font-medium leading-4 text-red mt-1 flex items-center">
                  <span>Overpriced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Title from "@/components/pages/company/head/Title";
  import Statistics from "@/components/pages/company/head/Statistics";

  export default {
    components: {
      Statistics,
      Title
    }
  }
</script>
