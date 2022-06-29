<template>
  <div class="border border-solid border-grey-bg-footer rounded-[12px] shadow-sm py-3 pl-3 pr-2 bg-white">
    <div
      class="flex items-center justify-between py-1"
      :class="{ 'border-b-2 border-solid border-grey-bg-footer': options.description }"
    >
      <h3 v-if="options.title" class="font-medium text-lg leading-7 text-footer-nav">
        {{ options.title }}
      </h3>



      <div class="flex items-center">
        <div v-if="options.listCheck" class="cursor-pointer mr-2">
          <img :src="require('@/assets/img/pages/company/list-check.svg')" alt="List check icon"/>
        </div>

        <ThreeCircleDropBtn />
      </div>
    </div>
    <p class="pb-1 mt-0.5 text-sm leading-4 text-secondary-text">
      {{ options.description }}
    </p>

    <slot />
  </div>
</template>

<script>
  import ThreeCircleDropBtn from "@/components/universal/ThreeCircleDropBtn";
  export default {
    components: {ThreeCircleDropBtn},
    props: {
      options: {
        type: Object,
        default: () => {},
      }
    }
  }
</script>
