<template>
  <div class="border border-solid border-border p-2 rounded-[14px] flex items-center">
    <div class="h-[10px] w-[15px] flex flex-col items-center justify-between cursor-pointer mr-3.5 ml-1">
      <span
        v-for="line in 3"
        :key="line"
        class="w-full h-0.5 bg-profile-icon"
      ></span>
    </div>

    <div class="h-[28px] w-[28px] rounded-[10px] bg-profile-icon flex items-center justify-center relative">
      <img :src="require('@/assets/img/profile/profile-icon.svg')" alt="profile icon" />

      <span
        v-if="notification.length"
        class="absolute top-[-1px] right-[-1px] h-[9px] w-[9px] border-2 border-white rounded-full bg-bubble-gum"
      ></span>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      notification: [
        { id: '1', text: 'Some text' }
      ]
    })
  }
</script>
