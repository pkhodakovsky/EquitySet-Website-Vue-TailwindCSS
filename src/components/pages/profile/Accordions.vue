<template>
  <div>
    <h3 class="font-medium pl-3 text-xl text-footer-nav mb-2">
      {{ options.heading }} ({{ options.items.length }})
    </h3>

    <SettingsCard v-for="item in options.items" :key="item.id" class="mb-3">
      <AccordionItem :data="item" />
    </SettingsCard>
  </div>
</template>

<script>
  import SettingsCard from "@/components/universal/SettingsCard";
  import AccordionItem from "@/components/universal/AccordionItem";

  export default {
    components: {
      AccordionItem,
      SettingsCard
    },
    props: {
      options: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
