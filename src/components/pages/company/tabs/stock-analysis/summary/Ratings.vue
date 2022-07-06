<template>
  <div>
    <SectionWrapper :options="sectionOptions">
      <div class="md:flex pt-9">
        <Card
          class="w-full mr-8 md:mb-0 mb-4" :options="{
          title: 'Tesla Recent News',
          description: 'Market Valuations and how they have trended over time',
          line: true,
          listCheck: true
        }"
        >
          <RatingContent
            increase
            title-rating="EQUITYSET RATING"
            previousText="Hold"
            equity-rating-text="BUY"
            equity-price="719.49"
            equity-text-price="Underpriced"
            equity-fair-percentage="25%"
            equity-fair-text="below fair value"
          />
        </Card>
        <Card class="w-full" :options="{
           title: 'Third Party Analysts',
           description: 'Market Valuations and how they have trended over time',
           listCheck: true,
           line: true
        }"
        >
          <RatingContent
            increase
            title-rating="EQUITYSET RATING"
            previousText="70% BUY"
            equity-rating-percentage="90%"
            equity-rating-text="BUY"
            equity-price="775.50"
            equity-text-price="Underpriced"
            equity-fair-percentage="42%"
            equity-fair-text="below Market Value"
          />
        </Card>
      </div>
    </SectionWrapper>
    <SeeMoreIdeas :options="seeMoreData" />
  </div>
</template>

<script>
import SectionWrapper from "@/components/pages/company/SectionWrapper";
import SeeMoreIdeas from "@/components/universal/SeeMoreIdeas";
import Card from "@/components/universal/Card";
import RatingContent from "@/components/universal/RatingContent/RatingContent";
export default {
  name: "Ratings",
  components: {RatingContent, Card, SeeMoreIdeas, SectionWrapper},
  data: () => ({
    sectionOptions: {
      heading: 'Rating & Price Targets',
      description: 'What Analysts think about the stock',
      darkBg: true
    },
    seeMoreData: [
      { title: 'See more in Structure', url: '' },
      { title: 'Learn more', url: '' },
    ]
  }),
}
</script>

<style scoped>

</style>
