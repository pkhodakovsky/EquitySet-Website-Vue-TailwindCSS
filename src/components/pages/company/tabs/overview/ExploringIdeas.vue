<template>
  <div>
    <SectionWrapper :options="sectionOptions">
      <Card
        :options="{
          title: '4.1. Recent Themes',
          description: 'Most Recent Equityset’s Themes involving TESL stock'
        }"
        class="mb-6 mt-8"
      >
        <ThemesList :items="themesItems" />
      </Card>
      <Card
        :options="{
          title: '4.2. Collections',
          description: 'Collections to find TESL Stock'
        }"
      >
        <CollectionsList :items="collectionsItems" />
      </Card>
    </SectionWrapper>

    <SeeMoreIdeas />
  </div>
</template>

<script>
  import SectionWrapper from "@/components/pages/company/SectionWrapper";
  import Card from "@/components/universal/Card";
  import ThemesList from "@/components/pages/company/tabs/overview/ThemesList";
  import CollectionsList from "@/components/pages/company/tabs/overview/CollectionsList"
  import SeeMoreIdeas from "@/components/universal/SeeMoreIdeas";

  export default {
    components: {
      SeeMoreIdeas,
      SectionWrapper,
      Card,
      ThemesList,
      CollectionsList
    },
    data: () => ({
      sectionOptions: {
        heading: 'Exploring Ideas about Tesla Inc.',
        darkBg: true
      },
      themesItems: [
        {
          id: '1',
          image: require('@/assets/img/pages/company/themes-list-image.png'),
          title: 'Companies with Rating Confidence 100%',
          description: 'Companies that if an investor followed the Equityset model would get rich!',
          link: {
            title: 'View in Screener',
            url: ''
          }
        },
        {
          id: '2',
          image: require('@/assets/img/pages/company/themes-list-image.png'),
          title: 'Companies with Rating Confidence 100%',
          description: 'Companies that if an investor followed the Equityset model would get rich!',
          link: {
            title: 'View in Screener',
            url: ''
          }
        },
        {
          id: '3',
          image: require('@/assets/img/pages/company/themes-list-image.png'),
          title: 'Companies with Rating Confidence 100%',
          description: 'Companies that if an investor followed the Equityset model would get rich!',
          link: {
            title: 'View in Screener',
            url: ''
          }
        }
      ],
      collectionsItems: [
        {
          id: '1',
          title: '5G Networking',
          chartOptions: {
            areaColor: '#6a38eb',
            lineColor: '#6a38eb',
            dataValue: [2000, 3000, 5000, 2000, 4000, 3500, 2800, 9900]
          },
          topData: {
            count: '20 stocks',
            title: 'Idea SubGroup Name'
          },
          list: {
            title: 'Incl',
            list: [
              { icon: require('@/assets/img/pages/company/apple-icon.svg'), title: 'APPL' },
              { icon: require('@/assets/img/pages/company/tesla-icon.svg'), title: 'TESL' },
              { icon: require('@/assets/img/pages/company/korres-icon.svg'), title: 'TESL' },
            ]
          },
          description: 'The companies that are connecting the world through fifth generation cellular network technology.',
          showUrl: '',
          link: {
            title: 'View in Screener',
            url: ''
          }
        },
        {
          id: '2',
          title: '5G Networking',
          chartOptions: {
            areaColor: '#FF342A',
            lineColor: '#FF342A',
            dataValue: [3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000, 3000]
          },
          topData: {
            count: '20 stocks',
            title: 'Idea SubGroup Name'
          },
          list: {
            title: 'Incl',
            list: [
              { icon: require('@/assets/img/pages/company/apple-icon.svg'), title: 'APPL' },
              { icon: require('@/assets/img/pages/company/tesla-icon.svg'), title: 'TESL' },
              { icon: require('@/assets/img/pages/company/korres-icon.svg'), title: 'TESL' },
            ]
          },
          description: 'The companies that are connecting the world through fifth generation cellular network technology.',
          showUrl: '',
          link: {
            title: 'View in Screener',
            url: ''
          }
        },
        {
          id: '3',
          title: '5G Networking',
          chartOptions: {
            areaColor: '#28A946',
            lineColor: '#28A946',
            dataValue: [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]
          },
          topData: {
            count: '20 stocks',
            title: 'Idea SubGroup Name'
          },
          list: {
            title: 'Incl',
            list: [
              { icon: require('@/assets/img/pages/company/apple-icon.svg'), title: 'APPL' },
              { icon: require('@/assets/img/pages/company/tesla-icon.svg'), title: 'TESL' },
              { icon: require('@/assets/img/pages/company/korres-icon.svg'), title: 'TESL' },
            ]
          },
          description: 'The companies that are connecting the world through fifth generation cellular network technology.',
          showUrl: '',
          link: {
            title: 'View in Screener',
            url: ''
          }
        },
        {
          id: '4',
          title: '5G Networking',
          chartOptions: {
            areaColor: '#6A38EB',
            lineColor: '#6A38EB',
            dataValue: [7000, 5000, 7000, 6500, 6000, 5000, 7000, 9500, 9900]
          },
          topData: {
            count: '20 stocks',
            title: 'Idea SubGroup Name'
          },
          list: {
            title: 'Incl',
            list: [
              { icon: require('@/assets/img/pages/company/apple-icon.svg'), title: 'APPL' },
              { icon: require('@/assets/img/pages/company/tesla-icon.svg'), title: 'TESL' },
              { icon: require('@/assets/img/pages/company/korres-icon.svg'), title: 'TESL' },
            ]
          },
          description: 'The companies that are connecting the world through fifth generation cellular network technology.',
          showUrl: '',
          link: {
            title: 'View in Screener',
            url: ''
          }
        }
      ]
    })
  }
</script>
