<template>
  <div class="px-2 grid grid-cols-12">
    <div class="col-start-1 col-end-12 xl:col-start-1 xl:col-end-7">
      <div class="flex pt-5">
        <p class="text-xs leading-3	font-bold text-secondary-text pr-[5px]">{{ titleRating }}</p>
        <img :src="require('@/assets/img/pages/company/info.svg')" alt="info">
      </div>
      <div class="flex sm:flex-row flex-col lg:items-center pt-3">
        <span
          class="font-bold leading-7 text-[22px] pr-2.5 whitespace-nowrap"
          :class="increase ? 'text-green' : 'text-red'"
        >{{ equityRatingPercentage }} {{ equityRatingText }}</span>
        <StateBoxes
          box-length="9"
          :active-boxes="[6,7]"
          :color="increase ? '#28A946' : '#FF342A'"
        />
      </div>
      <div class="pt-3.5 flex items-center">
        <div class="mr-1 flex items-center justify-center h-[15px] w-[15px] rounded-[4px] bg-icon-bg">
          <img class="h-2 w-2" :src="require(`@/assets/img/pages/company/arrow-${increase ? 'up' : 'down'}.svg`)" alt="arrow">
        </div>
        <p class="flex items-center text-xs leading-4 text-grey">Previous: <span class="pl-1 font-medium">{{ previousText }}</span></p>
      </div>
    </div>

    <div class="col-start-1 col-end-12 xl:col-start-8 xl:col-end-12">
      <div class="flex pt-5">
        <p class="text-xs leading-3	font-bold text-secondary-text pr-[5px]">{{ titleRating }}</p>
        <img :src="require('@/assets/img/pages/company/info.svg')" alt="info">
      </div>
      <div class="flex items-center pt-3">
        <p class="leading-[18px] font-bold text-lg">
          $<span class="text-[22px]">{{ equityPrice }}</span>
        </p>
        <span
          class="leading-5 font-bold text-sm pl-[7px]"
          :class="increase ? 'text-green' : 'text-red'"
        >
          {{ equityTextPrice }}
        </span>
      </div>
      <div class="pt-3.5 flex items-center">
        <p class="font-medium text-footer-nav">
          {{ equityFairPercentage }}
          <span class="text-grey text-xs leading-3">{{ equityFairText }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import StateBoxes from "@/components/universal/StateBoxes";
export default {
  name: "RatingContent",
  components: {StateBoxes},
  props: {
    titleRating: {
      type: String,
      default: ''
    },
    percentage: {
      type: [String, Number],
      default: ''
    },
    increase: {
      type: Boolean,
      default: false
    },
    previousText: {
      type: String,
      default: ''
    },
    equityRatingPercentage: {
      type: [Number, String],
      default: ''
    },
    equityRatingText: {
      type: String,
      default: ''
    },
    equityPrice: {
      type: [Number, String],
      default: 0
    },
    equityTextPrice: {
      type: String,
      default: ''
    },
    equityFairPercentage: {
      type: [String, Number],
      default: ''
    },
    equityFairText: {
      type: String,
      default: ''
    }
  }
}
</script>
