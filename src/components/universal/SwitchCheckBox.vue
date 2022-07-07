<template>
  <div
    class="h-4 w-9 rounded-[8px] relative cursor-pointer transition-all duration-500"
    :class="active ? 'bg-primary' : 'bg-time-grey'"
    :style="`height:${height/5*4}px;width:${height/5*9}px`"
    @click="$emit('changeActive')"
  >
    <div
      class="rounded-full bg-white border shadow-md absolute top-[-2px] transition-all duration-500"
      :class="active ? 'right-0 border-primary' : 'right-full translate-x-full border-time-grey'"
      :style="`height:${height}px;width:${height}px`"
    ></div>
  </div>
</template>

<script>
  export default {
    name: "SwitchCheckbox",
    props: {
      active: { type: Boolean, default: false },
      height: {
        type: Number,
        default: 20,
      }
    }
  }
</script>
