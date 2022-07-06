<template>
  <div class="border border-solid border-grey-bg-footer rounded-[12px] shadow-md py-3 pl-3 pr-2 bg-white">
    <div
      class="flex items-center justify-between py-1"
      :class="{ 'border-b-2 border-solid border-grey-bg-footer': options.line }"
    >
      <h3
        v-if="options.title"
        class="font-medium leading-7"
        :class="[options.lightTitle ? 'text-xl text-secondary-text' : 'text-lg text-footer-nav', {
          'text-base': options.smallTitle,
        }]"
      >
        {{ options.title }}
      </h3>

      <div class="flex items-center">
        <LineCheck v-if="options.listCheck" />

        <ThreeCircleDropBtn />
      </div>
    </div>
    <p class="pb-1 mt-0.5 text-sm leading-4 text-secondary-text">
      {{ options.description }}
    </p>

    <slot />

    <div v-if="options.learnMoreLink" class="mt-[26px] flex justify-end pr-1">
      <router-link :to="options.learnMoreLink" class="text-xs leading-4 font-medium underline text-secondary-text">
        Learn more
      </router-link>
    </div>
  </div>
</template>

<script>
  import LineCheck from "@/components/universal/LineCheck";
  import ThreeCircleDropBtn from "@/components/universal/ThreeCircleDropBtn";

  export default {
    components: {
      ThreeCircleDropBtn,
      LineCheck,
    },
    props: {
      options: {
        type: Object,
        default: () => ({ heading: '', description: '', line: true, listCheck: false, lightTitle: false }),
      }
    }
  }
</script>
