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
          class="mt-1.5"
        />

        <div class="ml-5">
          <div class="flex items-center">
            <h5 class="font-bold text-footer-nav">{{ item.title }}</h5>
            <p v-if="item.other" class="ml-2.5 px-2 py-0.5 bg-primary text-white text-xs rounded-[4px]">
              {{ item.other }}
            </p>
          </div>

          <p class="text-sm text-card-text-light">{{ item.description }}</p>
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
