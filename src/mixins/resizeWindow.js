export default {
  data: () => ({
    windowSize: false,
  }),
  methods: {
    resizeWindow() {
      this.windowSize = window.innerWidth
    },
  },
  mounted() {
    this.resizeWindow()
    window.addEventListener('resize', this.resizeWindow)
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeWindow)
  }
}
