<template>
  <div class="pt-[70px] pb-[30px] relative max-w-[460px]">
    <div class="h-10 relative shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.06)]">
      <div class="absolute left-[-1px] bottom-[-2px] h-[67px] w-[1px] bg-mischka"></div>

      <div
        v-for="item in items"
        :key="item.id"
        class="absolute h-full border border-white"
        :style="`background:${item.boxColor};width:${item.width}%;left:${item.start}%`"
      >
        <div
            class="absolute h-[63px] bottom-[-1px] right-[-1px] w-[3px] border-l border-white"
            :style="`background-color:${item.lineColor}`"
        >
          <span
            class="absolute top-0 text-[10px] leading-3 font-semibold whitespace-nowrap"
            :class="item.textLeft ? 'right-1' : 'left-1'"
            :style="`color:${item.textColor}`"
          >{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        id: '1',
        boxColor: '#5F31E8',
        lineColor: '#0F7670',
        textColor: '#0F7670',
        title: 'Last Fiscal Year 29B',
        start: 0,
        width: 29
      },
      {
        id: '2',
        boxColor: '#A37CF8',
        lineColor: '#0038D8',
        textColor: '#006FFF',
        title: 'Total 132M',
        textLeft: true,
        start: 29,
        width: 71
      },
    ]
  })
}
</script>
