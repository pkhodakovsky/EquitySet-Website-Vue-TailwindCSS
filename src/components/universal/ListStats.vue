<template>
  <div>
    <div class="w-10 h-0.5 bg-mischka mb-3"></div>

    <div>
      <div v-for="item in items" :key="item.id" class="flex mb-1">
        <div class="shrink-0">
          <img v-if="item.positive" :src="require('@/assets/img/components/list-stats/plus.svg')" alt="Plus icon" />
          <img v-else :src="require('@/assets/img/components/list-stats/minus.svg')" alt="Minus icon" />
        </div>
        <p class="text-sm leading-4 text-grey ml-1.5">
          <span
            v-for="(el, i) in item.title"
            :key="i"
            :class="{
              'font-bold': item.positive && !el.standard,
              'font-medium': !item.positive && !el.standard,
              'text-red': !el.standard && !el.positive,
              'text-green': !el.standard && el.positive
            }"
          >
            {{ el.data }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      items: { type: Array, default: () => [] }
    }
  }
</script>
