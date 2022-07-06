<template>
  <section class="pb-10">
    <div class="flex flex-col items-end">
      <div class="text-xs leading-4 font-ubuntu tracking-[-0.004em] text-hit-gray">Upd: 03 Mar, 2022. 21:00</div>
      <div class="flex items-center justify-end">
        <ButtonLink link="/" text-content="Add Triggers" />

        <ButtonLink link="/" text-content="Add to wathlsit" class="lg:ml-[15px]" />
      </div>
    </div>
    <div class="flex items-center">
      <div class="h-[44px] w-[44px]">
        <img
          class="h-full w-full object-contain"
          :src="require('@/assets/img/pages/market-screen/head-main.png')"
          alt="head main image"
        />
      </div>

      <div class="ml-1.5 text-river-bed">
        <h1 class="font-open-sans text-[32px] leading-[38px] mb-0.5">S&P 500 Index</h1>
        <p class="text-xs leading-4 font-ubuntu">
          <span>Companies</span>
          <span class="font-medium ml-2">500</span>
        </p>
      </div>
    </div>

    <p class="mt-[18px] mb-6 max-w-[483px] text-hit-gray font-open-sans text-sm leading-6">
      The DJIA (Dow Jones Industrial Average) is a price-weighted index that tracks 30 large,  publicly-owned companies trading on the New York Stock Exchange and the NASDAQ.
    </p>

    <div class="h-[1px] bg-athens-gray"></div>

    <div class="pt-[9px]">
      <div class="flex items-end justify-between">
        <div>
          <h2 class="font-ubuntu font-bold leading-[22px] mb-[7px]">At a glance</h2>

          <div class="flex">
            <div class="mr-10">
              <h3 class="font-open-sans font-semibold text-xs uppercase leading-[14px] text-disabled-input-text"
              >
                RATING AVERAGE
              </h3>

              <div class="flex mt-0.5">
                <p class="uppercase text-river-bed font-ubuntu font-bold text-sm leading-5 mr-1">Hold</p>

                <div class="flex mt-0.5">
                  <div class="h-2 mr-[1px] relative w-[9px] bg-[#965858]">
                    <span class="absolute top-full left-1/2 translate-x-[-50%] text-[10px] leading-3 text-[#828282]">18</span>
                  </div>
                  <div class="h-2 mr-[1px] relative w-[15px] bg-[#E4A2A2]">
                    <span class="absolute top-full left-1/2 translate-x-[-50%] text-[10px] leading-3 text-[#828282]">32</span>
                  </div>
                  <div class="h-2 mr-[1px] relative w-[39px] bg-[#C4C4C4]">
                    <span class="absolute top-full left-1/2 translate-x-[-50%] text-[10px] leading-3 text-[#828282]">60</span>
                  </div>
                  <div class="h-2 mr-[1px] relative w-[12px] bg-[#9EC5C3]">
                    <span class="absolute top-full left-1/2 translate-x-[-50%] text-[10px] leading-3 text-[#828282]">22</span>
                  </div>
                  <div class="h-2 mr-[1px] relative w-[5px] bg-[#4C8380]">
                    <span class="absolute top-full left-1/2 text-[10px] leading-3 text-[#828282]">6</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-open-sans font-semibold text-xs uppercase leading-[14px] text-disabled-input-text"
              >
                FAIR VALUE AVERAGE
              </h3>

              <div class="flex items-center mt-0.5">
                <p class="text-river-bed font-ubuntu font-bold leading-5 mr-[5px]">$89.73</p>
                <p class="font-open-sans text-xs leading-[14px] font-semibold px-1 py-0.5 bg-super-light-green">
                  below 31.25%
                </p>
              </div>
            </div>
          </div>

          <div class="flex items-center mt-[22px] pb-1">
            <div class="flex items-center mr-7">
              <router-link
                class="underline uppercase font-ubuntu font-medium text-xs leading-[14px] text-disabled-input-text mr-2"
                to="/"
              >
                Upcoming earnings
              </router-link>
              <div
                class="px-3 py-1.5 rounded-[14px] font-ubuntu font-bold text-sm leading-5 text-accordion-when bg-jungle-mist shrink-0"
              >
                3
              </div>
            </div>

            <div class="flex items-center">
              <router-link
                class="underline uppercase font-ubuntu font-medium text-xs leading-[14px] text-disabled-input-text mr-2"
                to="/"
              >
                Upcoming dividents
              </router-link>
              <div
                class="px-3 py-1.5 rounded-[14px] font-ubuntu font-bold text-sm leading-5 text-accordion-when bg-jungle-mist shrink-0"
              >
                3
              </div>
            </div>
          </div>
        </div>

        <div class="mx-[26px] max-w-[461px] text-disabled-input-text">
          <div class="flex items-center justify-between mb-2">
            <h3 class="text-xs font-medium leading-[14px] uppercase mb-0.5 font-ubuntu">Top sectors</h3>
            <router-link to="/" class="underline font-open-sans text-xs leading-[17px]">View Analysis</router-link>
          </div>

          <div class="flex flex-wrap items-center justify-between">
            <div v-for="item in topSectors" :key="item.id" class="flex items-center mb-1.5">
              <p class="font-ubuntu text-sm leading-none mr-1.5 underline">
                {{ item.title }}
              </p>
              <div
                class="py-0.5 px-2.5 flex items-center rounded-[12px]"
                :class="item.positive ? 'bg-scandal' : 'bg-cinderella'"
              >
                <img
                  v-if="item.positive"
                  :src="require('@/assets/img/pages/market-screen/sectors-up.svg')"
                  alt="arrow up"
                />
                <img v-else :src="require('@/assets/img/pages/market-screen/sectors-down.svg')" alt="arrow down" />
                <p
                  class="font-medium text-sm leading-5"
                  :class="item.positive ? 'text-watercourse' : 'text-old-brick'"
                >
                  {{ item.val }}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-disabled-input-text font-open-sans mt-[25px]">
        <h3 class="text-xs font-semibold leading-[14px] uppercase mb-0.5">Takeways</h3>

        <div v-for="item in takeways" :key="item.id" class="flex items-center">
          <div class="shrink-0">
            <img v-if="item.positive" :src="require('@/assets/img/pages/market-screen/PlusCircle.svg')" alt="Plus" />
            <img v-else :src="require('@/assets/img/pages/market-screen/MinusCircle.svg')" alt="'Minus'" />
          </div>

          <p class="text-sm leading-5 ml-1">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ButtonLink from "@/components/universal/ButtonLink";
export default {
  components: { ButtonLink },
  data: () => ({
    takeways: [
      { id: 1, positive: true, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscin' },
      { id: 2, positive: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscin' },
      { id: 3, positive: false, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscin' },
      { id: 4, positive: true, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.consectetur adipiscin' },
    ],
    topSectors: [
      { id: 1, positive: true, title: 'Finance', val: 12 },
      { id: 2, positive: true, title: 'Industrials', val: 12 },
      { id: 3, positive: true, title: 'Technology', val: 12 },
      { id: 4, positive: false, title: 'Business Services', val: 12 },
      { id: 5, positive: false, title: 'Energy', val: 12 },
      { id: 6, positive: false, title: 'Utilities', val: 12 },
    ]
  })
}
</script>
