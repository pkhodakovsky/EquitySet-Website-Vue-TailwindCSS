<template>
  <div class="shadow-sm border border-solid border-border rounded-[6px] py-2.5 px-4 relative w-[154px]">
    <div class="flex items-center justify-center cursor-pointer" @click="open = !open">
      <p class="mr-3 text-sm font-medium text-grey">{{ selected || placeholder }}</p>
      <img :src="require('@/assets/img/search/arrow-down.svg')" alt="arrow down icon" />
    </div>

    <div
      class="max-h-[200px] shadow-md overflow-auto absolute border border-solid border-border py-2.5 px-4 left-0 top-full w-full rounded-[6px] bg-white"
      :class="{
        'hidden': !open,
      }"
    >
      <p
          v-for="(item, i) in items"
          :key="item"
          class="text-sm font-medium text-center py-2 cursor-pointer"
          :class="{
              'text-primary': item === selected,
              'text-grey': item !== selected,
              'border-b border-solid border-border': i !== items.length - 1
            }"
          @click="selectTime(item)"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      placeholder: 'No  restriction',
      selected: null,
      open: false,
      items: [
        '00:00',
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
        '24:00',
      ]
    }),
    methods: {
      selectTime(item) {
        this.selected = item
        this.open = false
      }
    }
  }
</script>
