<template>
  <div>
    <div class="flex">
      <div class="mr-[18px] w-[30px]"></div>
      <div
          v-for="item in options.header"
          :key="item"
          class="w-[147px] text-center p-2 border-b border-grey-bg-footer text-sm font-medium leading-5 text-secondary-text"
      >
        {{ item }}
      </div>
    </div>

    <div
        v-for="item in options.items"
        :key="item.id"
        class="flex flex md:flex-row flex-col items-center mt-4"
    >
      <div class="md:mb-0 mb-2 mr-[18px] w-[30px] text-xs leading-none font-bold text-secondary-text">
        {{ item.title }}
      </div>
      <div
          v-for="head in options.header"
          :key="head"
          class="md:mb-0 mb-2 w-[147px] flex items-center justify-center"
      >
        <div
            class="rounded-[2px] py-1 px-2 text-white w-[131px] flex items-center justify-center"
            :class="item[head.toLowerCase()] === 'Over' ? 'bg-green' : 'bg-red'"
        >
          <img
              v-if="item[head.toLowerCase()] === 'Over'"
              :src="require('@/assets/img/pages/company/over-white-arrow.svg')"
              alt="over arrow"
          />
          <img
              v-else
              :src="require('@/assets/img/pages/company/under-white-arrow.svg')"
              alt="under arrow"
          />
          <span class="font-semibold leading-none ml-1">{{ item[head.toLowerCase()] }}</span>
          <span class="font-medium text-xs leading-none mt-0.5">/perform</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { options: { type: Object, default: () => {} }}
}
</script>
