<template>
  <div class="mt-4 px-2 lg:px-4 py-3 flex flex-col lg:flex-row">
    <div
      v-for="item in items"
      :key="item.id"
      class="px-2 pt-2 pb-3 rounded-[12px] border border-solid border-grey-bg-footer mb-4 lg:mb-0 lg:mr-8"
    >
      <div class="flex justify-between">
        <div class="text-xs leading-4 text-grey">
          <p>{{ item.time }}</p>
          <p><span>{{ item.timeInfo.title }}</span> - <span class="font-medium">{{ item.timeInfo.data}}</span></p>
        </div>

        <div class="text-dark-green py-1 px-2 bg-light-green rounded-[45px] text-sm leading-4 font-medium h-fit">
          {{ item.status }}
        </div>
      </div>

      <h4 class="text-sm text-footer-nav font-medium leading-4 my-3">{{ item.title }}</h4>

      <div class="flex mb-5">
        <p
            v-for="(tag, i) in item.hashtags"
            :key="i"
            class="mr-2 text-xs leading-none text-secondary-text"
        >
          #{{ tag }}
        </p>
      </div>
      <ButtonLink :link="item.link.url" :text-content="item.link.title" />
    </div>
  </div>
</template>

<script>
  import ButtonLink from "@/components/universal/ButtonLink";
  export default {
    components: {ButtonLink},
    props: {
      items: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
