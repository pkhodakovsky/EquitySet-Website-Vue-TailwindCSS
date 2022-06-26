<template>
  <section class="lg:pl-10 lg:ml-2.5">
    <div class="flex flex-col lg:flex-row justify-between lg:items-center">
      <div class="flex flex-col lg:flex-row lg:items-center">
        <div class="mr-5 h-[96px] w-[96px] relative mb-2 lg:mb-0">
          <img
            class="h-full w-full object-contain rounded-[6px]"
            :src="avatar"
            alt="Profile avatar"
          />

          <div
            class="absolute right-[-4px] bottom-[-4px] w-6 h-6 rounded-[4px] bg-icon-bg flex items-center justify-center"
          >
            <img :src="require('@/assets/img/pages/profile/edit-image.svg')" alt="Edit image icon" />
          </div>
        </div>

        <div>
          <h3
            class="text-2xl leading-[28px] tracking-[-0.01em] font-bold text-footer-nav mb-2 lg:mb-0"
          >
            {{ login }}
          </h3>
          <div class="text-sm leading-[16px] text-secondary-text flex flex-col lg:flex-row lg:items-center">
            <span>{{ aboutText }}</span>
            <span class="font-medium text-secondary-text-bold lg:ml-1.5 mt-2 lg:mt-0">{{ infoText }}</span>
          </div>
        </div>
      </div>

      <router-link
        class="text-primary text-base font-medium border-b border-solid border-primary w-fit mt-3 lg:mt-0"
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
