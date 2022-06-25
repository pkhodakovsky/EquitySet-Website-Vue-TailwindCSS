<template>
  <div>
    <div class="flex items-center justify-between">
      <h4 class="text-secondary-text-bold font-bold">{{ data.title }} ({{ data.items.length }})</h4>

      <div class="cursor-pointer text-primary text-sm font-semibold" @click="openAccordion">
        {{ open ? 'See less' : 'See more' }}
      </div>
    </div>

    <div
      v-if="data.items.length"
      class="max-h-0 overflow-hidden transition-all duration-500"
      :class="{ 'pt-8': open }"
      ref="accordion"
    >
      <div class="border-b border-solid border-border flex py-2">
        <div class="w-[185px]"></div>
        <div class="w-[224px] text-secondary-text text-sm font-semibold">When</div>
        <div class="w-[108px] text-secondary-text text-sm font-semibold text-center">Sms</div>
        <div class="w-[108px] text-secondary-text text-sm font-semibold text-center">Email</div>
        <div class="w-[108px] text-secondary-text text-sm font-semibold text-center">In Summary</div>
      </div>

      <div v-for="item in data.items" class="border-b border-solid border-border flex items-center pt-3.5 pb-5">
        <div class="w-[185px] px-2">
          <h5 class="font-bold text-footer-nav">{{ item.title }}</h5>
          <p class="text-xs text-card-text-light">{{ item.company }}</p>
        </div>
        <div class="w-[224px] pr-1">
          <span class="text-xs">{{ item.when.label }}: </span>
          <span class="text-xs font-bold">{{ item.when.text }}</span>
        </div>
        <div class="w-[108px] flex justify-center">
          <FormCheckbox @changeCheck="item.sms = !item.sms" :active="item.sms" />
        </div>
        <div class="w-[108px] flex justify-center">
          <FormCheckbox @changeCheck="item.email = !item.email" :active="item.email" />
        </div>
        <div class="w-[108px] flex justify-center">
          <FormCheckbox @changeCheck="item.inSummary = !item.inSummary" :active="item.inSummary" />
        </div>
        <div class="w-[34px] flex justify-center cursor-pointer">
          <div class="h-6 w-6 rounded-[4px] hover:bg-icon-bg transition-all duration-500 flex items-center justify-center">
            <img :src="require('@/assets/img/pages/profile/edit.svg')" alt="Edit icon" />
          </div>
        </div>
        <div class="w-[34px] flex justify-center cursor-pointer">
          <div class="h-6 w-6 rounded-[4px] hover:bg-icon-bg transition-all duration-500 flex items-center justify-center">
            <img :src="require('@/assets/img/pages/profile/delete.svg')" alt="Delete icon" />
          </div>
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
      data: {
        type: Object,
        default: () => {}
      }
    },
    data: () => ({
      open: false,
    }),
    methods: {
      openAccordion() {
        this.open = !this.open
        setTimeout(() => {
          this.$refs.accordion.style.maxHeight = this.open
            ? this.$refs.accordion.scrollHeight + 30 + 'px'
            : 0
        }, 100)
      }
    }
  }
</script>
