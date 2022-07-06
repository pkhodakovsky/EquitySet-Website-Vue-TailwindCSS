<template>
  <div>
    <slot/>

    <div class="flex">
      <div
          v-for="(box, index) in boxesData"
          :key="index"
          class="flex justify-center items-center h-5 w-5 bg-mischka rounded-sm mr-[3px]"
          :style="{ backgroundColor: box.active ? color : '' }"
      >
      <span
          v-if="box.active"
          class="inline-block h-2 w-2 rounded-full bg-white"
      />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StateBoxes",
  props: {
    boxLength: {
      type: [Number, String],
      default: 0
    },
    color: {
      type: String,
      default: '#1B2230'
    },
    activeBoxes: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    boxesData: []
  }),
  mounted() {
    for(let index = 0; index < this.boxLength; index++) {
      this.boxesData.push({
        active: false,
        id: index
      })
    }
    this.activeBoxes.forEach(box => {
      if(this.boxesData[box]) {
        this.boxesData[box] = { ...this.boxesData[box], active: true }
      }
    })
  }
}
</script>
