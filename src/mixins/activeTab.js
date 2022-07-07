
export default {
  data: () => ({
    initialArrayMixin: [],
    activeTabNameMixin: '',
    indexOfItemMixin: null
  }),
  methods: {
    getActiveTab(array, activeTab, queryName) {
      this.initialArrayMixin = array
      this.activeTabNameMixin = activeTab
      const getQuery = this.$route.query
      this.initialArrayMixin = array.map(item => {
        if(item.id.includes(getQuery[queryName])) {
          activeTab = item.id
          this.activeTabNameMixin = activeTab
          return { ...item, active: true }
        }
        else {
          return { ...item, active: false }
        }
      })
      const findActiveTabIndex = this.initialArrayMixin.findIndex(el => el.id === activeTab)
      this.indexOfItemMixin = findActiveTabIndex
      this.initialArrayMixin[findActiveTabIndex].active = true
    }
  }
}
