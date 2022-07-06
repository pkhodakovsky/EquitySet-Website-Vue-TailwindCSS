<template>
  <div>
    <div class="cursor-pointer mr-2" @click="open = true">
      <img :src="require('@/assets/img/pages/company/list-check.svg')" alt="List check icon"/>
    </div>

    <div
      class="transition-all duration-500 h-[100vh] w-[100vw] bg-icon-bg left-0 top-0 z-[10000] flex items-center justify-center"
      :class="open ? 'fixed opacity-100' : 'hidden opacity-0'"
    >
      <div class="z-[100000] rounded-[12px] bg-white px-5 py-4 max-w-[1172px] w-[90vw] pointer-events-none shadow-md">
        <div class="flex justify-between items-center">
          <div class="text-3xl leading-7 font-bold text-footer-nav">Ratings & Price Targets</div>
          <div class="pointer-events-auto cursor-pointer" @click="open=false">
            <img :src="require('@/assets/img/components/line-check/close.svg')" alt="Close btn">
          </div>
        </div>
        <div class="text-secondary-text text-sm leading-4 mt-1 mb-[75px]">
          This is the data modal that opens. More indepth users need actual data to import in sheets & Stuff
        </div>

        <div class="flex justify-end pb-3">
          <div class="flex items-center w-fit cursor-pointer">
            <div class="text-xs leading-4 text-secondary-text font-medium underline mr-1">Export to CSV</div>
            <img :src="require('@/assets/img/components/line-check/export.svg')" alt="export icon" />
          </div>
        </div>

        <div class="max-w-full overflow-auto">
          <div class="flex ">
            <div
                v-for="item in table.head"
                :key="item.id"
                class="flex items-center w-[344px] py-3 px-3.5 bg-icon-bg"
                :class="{ 'cursor-pointer': item.sortable }"
                @click="sort(item.id, item.sortable)"
            >
              <div v-if="item.sortable" class="mr-2">
                <img v-if="item.sort" :src="require('@/assets/img/components/line-check/sortable-primary.svg')" alt="sortable icon" />
                <img v-else :src="require('@/assets/img/components/line-check/sortable.svg')" alt="sortable icon" />
              </div>
              <div
                class="text-sm leading-4 font-medium uppercase tracking-[0.05em]"
                :class="item.sort ? 'text-primary' : 'text-grey'"
              >{{ item.title }}</div>
            </div>
          </div>

          <div v-for="row in table.rows" :key="row.id" class="flex items-center border-b border-grey-bg-footer">
            <div
              v-for="item in table.head"
              :key="`item-${item.id}`"
              class="w-[344px] py-4 px-6 text-sm leading-4 text-grey"
            >
              {{ row[item.id] }}
            </div>
          </div>
        </div>

        <div class="text-xs leading-4 font-medium max-w-[320px] mb-20 mt-[52px]">
          What Data we need to include? What more to say to the user? on this modal? This is for mode
        </div>

        <SeeMoreIdeas :options="[{ title: 'See more in Structure', url: '' }, { title: 'Learn more', url: '' }]" />
      </div>
    </div>
  </div>
</template>

<script>
import SeeMoreIdeas from "@/components/universal/SeeMoreIdeas";
export default {
  components: { SeeMoreIdeas },
  data: () => ({
    open: false,
    table: {
      head: [
        { id: 1, title: 'SORTED TABLE COLUMN', sortable: true },
        { id: 2, title: 'SORTED IDLE  COLUMN', sortable: true },
        { id: 3, title: 'TABLE COLUMN' },
        { id: 4, title: 'TABLE COLUMN' },
      ],
      rows: [
        {
          id: 'row-1',
          1: 'Prime Value',
          2: 'Value',
          3: 'Value',
          4: 'Value'
        },
        {
          id: 'row-2',
          1: 'Prime Value',
          2: 'Value',
          3: 'Value',
          4: 'Value'
        },
        {
          id: 'row-3',
          1: 'Prime Value',
          2: 'Value',
          3: 'Value',
          4: 'Value'
        }
      ]
    }
  }),
  methods: {
    sort(id, sortable) {
      if (sortable) {
        this.table.head = this.table.head.map(item => item.id === id ? { ...item, sort: true } : { ...item, sort: false })
      }
    }
  }
}
</script>
