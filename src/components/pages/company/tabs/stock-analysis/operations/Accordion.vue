<template>
  <div>
    <div
      v-for="item in accordionItems"
      :key="item.id"
      class="rounded-[7px] border border-grey-bg-footer shadow-md pr-3.5 pl-2 py-3 mb-4"
    >
      <AccordionItem :item="item" @toggleItem="toggleItem" />
    </div>

    <div class="flex items-center mt-5">
      <button class="flex items-center text-primary font-medium mr-3.5">
        <span>+</span>
        <span class="ml-[7px] underline text-xs leading-4">add competitor</span>
      </button>

      <div class="text-icon-bg text-[10px] leading-4 font-bold px-0.5 rounded-[2px] bg-mischka">
        Premium
      </div>
    </div>
  </div>
</template>

<script>
import ListStats from "@/components/universal/ListStats";
import AccordionItem from "@/components/pages/company/tabs/stock-analysis/operations/AccordionItem";

export default {
  components: {
    AccordionItem,
    ListStats
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    accordionItems: []
  }),
  methods: {
    toggleItem(id) {
      this.accordionItems = this.accordionItems.map(item => item.id === id && !item.open
        ? { ...item, open: true} : { ...item, open: false})
    }
  },
  mounted() {
    this.accordionItems = this.items.map((item, i) => !i ? { ...item, open: true } : { ...item, open: false })
  }
}
</script>
