<template>
  <div>
    <div class="flex transition-all duration-500" :class="item.open && 'pb-5'">
      <div class="flex items-center mr-1.5">
        <div class="h-10 w-10 mr-3 relative shrink-0">
          <img class="h-full w-full object-contain" :src="item.icon" :alt="`${item.title} icon`" />

          <div class="absolute top-[22px] left-[26px] h-5 w-5 bg-white shadow-md rounded-full flex items-center justify-center">
            <img
              v-if="item.positive"
              :src="require('@/assets/img/pages/company/operations/up.svg')"
              alt="Up"
              class="h-4 w-4 object-contain"
            />
            <img
              v-else
              :src="require('@/assets/img/pages/company/operations/down.svg')"
              alt="Down"
              class="h-4 w-4 object-contain"
            />
          </div>
        </div>

        <div class="text-sm leading-4 text-footer-nav">
          <span class="font-medium mr-1">{{ item.title }}</span>
          <span>{{ item.description }}</span>
        </div>
      </div>

      <div class="h-5 w-5 shrink-0 cursor-pointer" @click="$emit('toggleItem', item.id)">
        <img
            class="h-full w-full object-contain transition-all duration-500"
            :class="{
              'rotate-180 grayscale': !item.open
            }"
            :src="require('@/assets/img/components/accordion/accordion-open-close-arrow.svg')"
            alt="Accordion open close arrow"
        />
      </div>
    </div>

    <div class="pl-2 max-h-0 overflow-hidden transition-all duration-500" ref="accordion" :class="item.open && 'pb-3'">
      <ListStats :items="item.listStats" />
    </div>
  </div>
</template>

<script>
import ListStats from "@/components/universal/ListStats";
export default {
  props: {
    item: { type: Object, default: () => {} },
  },
  components: {
    ListStats,
  },
  watch: {
    item() {
      this.openAccordion()
    }
  },
  methods: {
    openAccordion() {
      setTimeout(() => {
        this.$refs.accordion.style.maxHeight = this.item.open ? this.$refs.accordion.scrollHeight + 30 + 'px' : 0
      }, 100)
    }
  },
  mounted() {
    this.openAccordion()
  }
}
</script>
