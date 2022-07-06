<template>
  <div class="p-3 rounded-[12px] bg-icon-bg">
    <div class="flex items-center mb-7">
      <div class="w-[66px] h-5 pt-[3px]">
        <img class="h-full w-full object-contain" :src="require('@/assets/img/logos/logo.svg')" alt="Equityset logo" />
      </div>

      <div class="mx-1 h-5 w-[1px] bg-mischka"></div>

      <div class="uppercase text-white text-[10px] font-bold leading-none p-1 rounded-[2px] bg-gradient-to-r from-gold-from to-gold-to">
        Premium Analysis
      </div>
    </div>

    <div v-for="item in items" :key="item.id" class="flex mb-2">
      <div class="shrink-0 h-3.5 w-3.5">
        <img
          v-if="item.positive" :src="require('@/assets/img/pages/company/operations/up.svg')"
          alt="Plus icon"
          class="h-full w-full object-contain"
        />
        <img
          v-else
          :src="require('@/assets/img/pages/company/operations/down.svg')"
          alt="Minus icon"
          class="h-full w-full object-contain"
        />
      </div>
      <p class="text-sm leading-4 text-footer-nav ml-1.5">
        <span
          v-for="(el, i) in item.title"
          :key="i"
          :class="{
            'text-red font-medium': !el.standard && !el.positive,
            'text-japanese-laurel font-medium': !el.standard && el.positive
          }"
        >
          {{ el.data }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: { type: Array, default: () => [] },
  }
}
</script>
