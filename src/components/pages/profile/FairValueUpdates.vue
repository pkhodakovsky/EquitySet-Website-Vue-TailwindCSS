<template>
  <div>
    <div
      v-for="(item, i) in items"
      :key="i"
      class="flex flex-col lg:flex-row lg:items-center"
      :class="{
        'mb-3 pb-2 border-b border-solid border-border': i !== items.length- 1
      }"
    >
      <div class="lg:mr-20">
        <h5 class="font-bold text-secondary-text-bold mb-1">{{ item.title }}</h5>
        <p class="text-sm text-card-text-light">{{ item.description }}</p>
      </div>

      <div class="flex flex-col items-center lg:mr-20 my-4 lg:my-0">
        <p class="text-sm font-medium text-footer-nav mb-1.5">SMS</p>
        <FormCheckbox :active="item.sms" @changeCheck="item.sms = !item.sms" />
      </div>

      <div class="flex flex-col items-center lg:mr-20">
        <p class="text-sm font-medium text-footer-nav mb-1.5">Email</p>
        <FormCheckbox :active="item.email" @changeCheck="item.email = !item.email" />
      </div>
    </div>
  </div>
</template>

<script>
  import FormCheckbox from "@/components/universal/FormCheckbox";

  export default {
    components: {FormCheckbox},
    props: {
      items: {
        type: Array,
        default: () => [],
      }
    },
    data: () => ({
    })
  }
</script>
