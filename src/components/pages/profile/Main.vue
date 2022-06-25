<template>
  <section class="px-4 lg:px-10">
    <div class="flex justify-between items-center">
      <div class="flex items-center">
        <div class="mr-5 h-[96px] w-[96px] relative">
          <img
            class="h-full w-full object-contain rounded-[6px]"
            :src="avatar"
            alt="Profile avatar"
          />

          <div class="absolute right-[-4px] bottom-[-4px] w-6 h-6 rounded-[4px] bg-icon-bg flex items-center justify-center">
            <img :src="require('@/assets/img/pages/profile/edit-image.svg')" alt="Edit image icon" />
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold text-footer-nav">{{ login }}</h3>
          <div class="text-sm text-secondary-text flex items-center">
            <span>{{ aboutText }}</span>
            <span class="font-medium text-secondary-text-bold ml-1.5">{{ infoText }}</span>
          </div>
        </div>
      </div>

      <router-link
        class="text-primary text-base font-medium border-b border-solid border-primary"
        to="/"
      >
        Edit Username
      </router-link>
    </div>
  </section>
</template>

<script>
  export default {
    data: () => ({
      avatar: require('@/assets/img/pages/profile/Avatar.png'),
      login: 'anastako21',
      aboutText: 'This is used to display your name publically across the platform. ',
      infoText: 'You can change the public username only once.'
    })
  }
</script>
