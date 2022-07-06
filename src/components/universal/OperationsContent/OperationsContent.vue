<template>
  <Card :options="cardOptions">
    <div class="p-2">
      <h1
        class="font-bold leading-7 text-[22px] pb-[18px]"
        :class="cardItem.increase ? 'text-green' : ''"
      >{{cardItem.typeText}}</h1>
      <div class="flex">
        <div
          v-for="(item, index) in cardItem.stats"
          :key="index"
          class="flex items-center mr-[30px]">
          <div class="flex items-center justify-center h-[26px] w-[26px] rounded-[4px] bg-icon-bg mr-[5px]">
            <img :src="require(`@/assets/img/pages/company/arrow-${cardItem.increase ? 'up' : 'down'}.svg`)" alt="Arrow up" />
          </div>
          <div>
            <p
              class="font-bold"
              :class="cardItem.increase ? 'text-green' : ''"
            >{{ item.percentage }}</p>
            <p class="text-xs leading-3 text-secondary-text">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <div>
        <OperationsBarContent :card-item="cardItem" />
      </div>
    </div>
  </Card>
</template>

<script>
import Card from "@/components/universal/Card";
import OperationsBarContent from "@/components/universal/OperationsContent/OperationsBarContent";
export default {
  name: "OperationsContent",
  components: {
    Card,
    OperationsBarContent
  },
  props: {
    cardOptions: {
      type: Object,
      default: () => {}
    },
    cardItem: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>

</style>
