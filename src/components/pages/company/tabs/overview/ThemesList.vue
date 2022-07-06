<template>
  <div class="flex flex-col lg:flex-row py-3 px-2 mt-0.5">
    <div
      v-for="item in items"
      :key="item.id"
      class="pt-1.5 pb-2.5 pl-2 pr-1.5 border border-solid border-grey-bg-footer mb-5 lg:mb-0 lg:mr-[56px] max-w-[416px]"
    >
      <div class="flex items-start">
        <div class="shrink-0 mr-3.5">
          <img :src="item.image" alt="Theme image" />
        </div>

        <div>
          <h4 class="text-lg leading-6 text-grey font-bold">{{ item.title }}</h4>
          <p class="pt-1 pb-4 text-sm leading-4 text-footer-nav">{{ item.description }}</p>

          <div class="flex items-center justify-between">
            <ButtonLink :link="item.link.url" :text-content="item.link.title" />

            <div class="flex items-center">
              <div class="mr-2 cursor-pointer">
                <img :src="require('@/assets/img/pages/company/save-icon.svg')" alt="Save icon" />
              </div>

              <div class="cursor-pointer">
                <img :src="require('@/assets/img/pages/company/share-icon.svg')" alt="Share icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonLink from "@/components/universal/ButtonLink";
  export default {
    name: 'ThemesList',
    components: { ButtonLink },
    props: {
      items: { type: Array, default: () => {} }
    }
  }
</script>
