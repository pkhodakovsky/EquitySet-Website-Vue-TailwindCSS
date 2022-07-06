<template>
  <div
    class="h-4 w-9 rounded-[8px] relative cursor-pointer transition-all duration-500"
    :class="active ? 'bg-primary' : 'bg-time-grey'"
    @click="$emit('changeActive')"
  >
    <div
      class="h-5 w-5 rounded-full bg-white border shadow-md absolute top-[-2px] transition-all duration-500"
      :class="active ? 'right-0 border-primary' : 'right-full translate-x-full border-time-grey'"
    ></div>
  </div>
</template>

<script>
  export default {
    name: "SwitchCheckbox",
    props: {
      active: { type: Boolean, default: false }
    }
  }
</script>
