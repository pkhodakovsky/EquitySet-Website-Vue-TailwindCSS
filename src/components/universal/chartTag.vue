<template>
  <div class="flex items-center ml-2 py-1 px-1.5 border border-grey-bg-footer rounded-[2px] w-fit">
    <div :class="`bg-${color}`" class="h-2 w-2 rounded-full mr-1.5"></div>

    <span :class="`text-${color}`" class="text-[10px] leading-3 font-medium">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'chartTag',
  props: {
    color: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
