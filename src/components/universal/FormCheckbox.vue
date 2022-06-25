<template>
  <div
    class="h-4 w-4 rounded-[4px] border border-solid cursor-pointer transition-all duration-500 flex items-center justify-center"
    :class="{
      'border-primary bg-primary': active,
      'border-secondary-text': !active
    }"
    @click="$emit('changeCheck')"
  >
    <img
      class="transition-all duration-500"
      :class="{ 'opacity-0': !active }"
      :src="require('@/assets/img/components/form-checkbox/checked.svg')"
      alt="checked icon"
    />
  </div>
</template>

<script>
  export default {
    props: {
      active: {
        type: Boolean,
        default: () => false,
      }
    }
  }
</script>
