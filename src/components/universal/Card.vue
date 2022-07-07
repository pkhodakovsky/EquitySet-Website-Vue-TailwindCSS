<template>
  <div class="border border-solid border-grey-bg-footer rounded-[12px] shadow-md py-3 pl-3 pr-2 bg-white">
    <div
      class="flex items-start lg:items-center justify-between py-1"
      :class="{ 'border-b-2 border-solid border-grey-bg-footer': options.line }"
    >
      <h3
        v-if="options.title"
        class="font-medium leading-7 mr-3"
        :class="[options.lightTitle ? 'text-xl text-secondary-text' : 'text-lg text-footer-nav', {
          'text-base': options.smallTitle,
        }]"
      >
        {{ options.title }}
      </h3>

      <div class="flex items-center shrink-0">
        <GridBtn v-if="options.gridBtn" class="mr-2.5" />

        <LineCheck v-if="options.listCheck" class="shrink-0" />

        <ThreeCircleDropBtn class="shrink-0" />
      </div>
    </div>
    <p class="pb-1 mt-0.5 text-sm leading-4 text-secondary-text">
      {{ options.description }}
    </p>

    <slot />

    <div
      v-if="options.bottomLinks && options.bottomLinks.length"
      class="mt-[26px] flex pr-1"
      :class="options.bottomLinks.length > 1 ? 'justify-between' : 'justify-end'"
    >
      <router-link
        v-for="item in options.bottomLinks"
        :key="item.id"
        :to="item.link"
        class="text-xs leading-4 font-medium underline text-secondary-text"
      >
        {{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
  import LineCheck from "@/components/universal/LineCheck";
  import ThreeCircleDropBtn from "@/components/universal/ThreeCircleDropBtn";
  import GridBtn from "@/components/universal/GridBtn"

  export default {
    components: {
      ThreeCircleDropBtn,
      LineCheck,
      GridBtn,
    },
    props: {
      options: {
        type: Object,
        default: () => ({ heading: '', description: '', line: true, listCheck: false, lightTitle: false }),
      }
    }
  }
</script>
