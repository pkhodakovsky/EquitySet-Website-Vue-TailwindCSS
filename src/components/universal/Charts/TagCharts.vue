<template>
  <div class="mt-3 flex items-center">
    <button class="flex items-center py-1 px-1.5 border border-athens-gray rounded-[2px]">
      <span class="block h-2 w-2 rounded-full mr-1.5 mb-0 bg-dark-blue" />
      <span class="block text-dark-blue mb-0 text-[10px] leading-3">{{ title }}</span>
    </button>

    <div class="h-4 w-[1px] bg-profile-icon mx-2"></div>

    <div class="flex items-center">
      <div class="text-[10px] leading-4 text-grey mr-2">{{ checkBox.title }}</div>

      <SwitchCheckBox @changeActive="checkBox.active = !checkBox.active" :active="checkBox.active" />
    </div>
  </div>
</template>

<script>
  import SwitchCheckBox from "@/components/universal/SwitchCheckBox";

  export default {
    components: { SwitchCheckBox },
    props: {
      title: { type: String, default: '' },
      checkBox: { type: Object, default: () => ({ title: '', active: false }) }
    }
  }
</script>
