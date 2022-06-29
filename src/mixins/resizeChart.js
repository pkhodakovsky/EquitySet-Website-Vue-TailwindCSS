export default {
  data: () => ({
    element: null
  }),
  methods: {
    setRefElement(elem) {
      this.element = elem
    },
    resizeChart() {
      this.$refs[this.element]?.resize()
    }
  },
  mounted() {
    window.addEventListener('resize', this.resizeChart)
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeChart)
  }
}
