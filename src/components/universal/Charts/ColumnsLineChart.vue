<template>
  <div class="flex flex-col justify-end h-full">
    <div class="h-[60px] w-full bg-icon-bg relative">
      <div
        v-for="item in boxes"
        :key="item.id"
        class="h-full top-0 absolute"
        :style="`background:${item.color};left:${item.start}%;width:${item.width}%`"
      >

      </div>
      <div
        v-for="item in items"
        :key="item.id"
        class="absolute w-0.5 bottom-0 shadow-md"
        :style="`background:${item.color};height:${item.height};left:${item.position}%`"
      >
        <div
          class="whitespace-nowrap"
          :class="{ 'absolute bottom-full mb-1 translate-x-[-50%] text-center': item.textPosition === 'center'}"
        >
          <div
            v-if="item.title"
            class="text-[10px] leading-3 text-secondary-text font-medium"
            :class="{
              'absolute bottom-full left-0': item.textPosition === 'right',
              'absolute bottom-full right-0': item.textPosition === 'left'
            }"
          >
            {{ item.title }}
          </div>
          <div
            :class="{
              'absolute top-0 left-1': item.textPosition === 'right',
              'absolute top-0 right-1 text-right': item.textPosition === 'left'
            }"
          >
            <div
              v-if="item.price"
              class="font-semibold text-[10px] leading-3"
              :style="`color: ${item.textColor}`"
            >
              {{ item.price }}
            </div>
            <div
              v-if="item.other"
              class="text-[10px] leading-none"
              :style="`color: ${item.textColor}`"
            >
              {{ item.other }}
            </div>
            <div
              v-if="item.subTitle"
              class="text-[10px] leading-none text-secondary-text"
            >
              {{ item.subTitle }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="start || end" class="flex items-center justify-between mt-0.5 text-[10px] leading-3 font-medium">
      <div class="text-japanese-laurel">{{ start || '' }}</div>
      <div v-if="end" class="text-monza">{{ end }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    start: { type: String, default: null },
    end: { type: String, default: null },
    items: {
      type: [Array, Object],
      default: () => []
    },
    boxes: {
      type: [Array, Object],
      default: () => []
    }
  }
}
</script>
