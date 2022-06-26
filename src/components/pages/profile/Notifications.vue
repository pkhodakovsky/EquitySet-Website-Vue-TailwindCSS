<template>
  <div>
    <div
      v-for="(item, i) in items"
      :key="i"
      :class="{ 'border-b border-solid border-border': i < items.length - 1 }"
    >
      <div class="pt-2 pb-5 px-4 max-w-[500px] flex">
        <FormCheckbox
          :active="item.active"
          @changeCheck="item.active = !item.active"
          class="mt-1.5 shrink-0"
        />

        <div class="ml-5">
          <div class="flex flex-col lg:flex-row lg:items-center">
            <h5
              class="font-bold mb-1 lg:mb-0"
              :class="{
                'text-notification-other-title': item.other,
                'text-grey': !item.other,
              }"
            >
              {{ item.title }}
            </h5>
            <p
              v-if="item.other"
              class="lg:ml-2.5 px-2 py-0.5 bg-primary font-medium text-white text-xs rounded-[4px] w-fit"
            >
              {{ item.other }}
            </p>
          </div>

          <p class="text-sm text-card-text-light mt-2 lg:mt-0">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FormCheckbox from "@/components/universal/FormCheckbox";
  export default {
    components: {
      FormCheckbox
    },
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },
  }
</script>
