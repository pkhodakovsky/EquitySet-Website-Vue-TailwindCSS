<template>
  <div class="flex items-center justify-end">
    <div v-if="premium" class="mr-4 h-[30px] w-[30px] relative flex items-center justify-center cursor-pointer">
      <div class="absolute right-1 top-1 rounded-full bg-guardsman-red h-1 w-1">

      </div>
      <img :src="require('@/assets/img/profile/notifications-bell.svg')" alt="Notifications bell" />
    </div>

    <div
      class="flex items-center"
      :class="{
        'rounded-[110px] bg-bison-hide py-1.5 px-2.5': premium,
        'border border-border rounded-[14px] p-2': !premium
      }"
    >
      <div class="h-[10px] w-[15px] flex flex-col items-center justify-between cursor-pointer mr-3.5 ml-1">
        <span
          v-for="line in 3"
          :key="line"
          class="w-full h-0.5"
          :class="{
            'bg-white': premium,
            'bg-profile-icon': !premium
          }"
        ></span>
      </div>

      <div v-if="premium" class="h-6 w-6 flex items-center justify-center">
        <img
          class="h-5 w-5 object-contain"
          :src="require('@/assets/img/profile/profile-icon.svg')"
          alt="Profile icon"
        />
      </div>

      <div v-else class="h-[28px] w-[28px] rounded-[10px] bg-profile-icon flex items-center justify-center relative">
        <img :src="require('@/assets/img/profile/profile-icon.svg')" alt="profile icon" />

        <span
            v-if="notification && notification.length"
            class="absolute top-[-1px] right-[-1px] h-[9px] w-[9px] border-2 border-white rounded-full bg-bubble-gum"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      premium: {
        type: Boolean,
        default: false,
      }
    },
    data: () => ({
      notification: [
        { id: '1', text: 'Some text' }
      ]
    })
  }
</script>
