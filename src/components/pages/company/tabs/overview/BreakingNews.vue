<template>
  <SectionWrapper :options="sectionOptions">
    <Card class="mt-8" :options="cardOptions">
      <NewsList :items="itemsNews" />
    </Card>
  </SectionWrapper>
</template>

<script>
  import SectionWrapper from "@/components/pages/company/SectionWrapper";
  import Card from "@/components/universal/Card";
  import NewsList from "@/components/universal/NewsList";

  export default {
    components: {
      NewsList,
      Card,
      SectionWrapper
    },
    data: () => ({
      sectionOptions: {
        heading: 'Breaking News',
        darkBg: true,
      },
      cardOptions: {
        title: 'Tesla Recent News',
        description: 'Market Valuations and how they have trended over time'
      },
      itemsNews: [
        {
          id: '1',
          time: '14 Mar 2022 12:40PM',
          timeInfo: {
            title: 'Financial Times',
            data: '6 min to read'
          },
          status: 'Positive',
          title: 'New MacBook Air and 13-inch MacBook Pro with M2 coming later this year',
          hashtags: ['APPL', 'NASDAQ', 'Technology'],
          link: {
            title: 'Read full story',
            url: ''
          }
        },
        {
          id: '2',
          time: '14 Mar 2022 12:40PM',
          timeInfo: {
            title: 'Financial Times',
            data: '6 min to read'
          },
          status: 'Positive',
          title: 'New MacBook Air and 13-inch MacBook Pro with M2 coming later this year',
          hashtags: ['APPL', 'NASDAQ', 'Technology'],
          link: {
            title: 'Read full story',
            url: ''
          }
        },
        {
          id: '3',
          time: '14 Mar 2022 12:40PM',
          timeInfo: {
            title: 'Financial Times',
            data: '6 min to read'
          },
          status: 'Positive',
          title: 'New MacBook Air and 13-inch MacBook Pro with M2 coming later this year',
          hashtags: ['APPL', 'NASDAQ', 'Technology'],
          link: {
            title: 'Read full story',
            url: ''
          }
        },
        {
          id: '4',
          time: '14 Mar 2022 12:40PM',
          timeInfo: {
            title: 'Financial Times',
            data: '6 min to read'
          },
          status: 'Positive',
          title: 'New MacBook Air and 13-inch MacBook Pro with M2 coming later this year',
          hashtags: ['APPL', 'NASDAQ', 'Technology'],
          link: {
            title: 'Read full story',
            url: ''
          }
        },
      ]
    })
  }
</script>
