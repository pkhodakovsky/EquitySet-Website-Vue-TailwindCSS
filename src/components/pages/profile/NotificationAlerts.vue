<template>
  <div class="max-w-[840px]">
    <h3 class="text-footer-nav text-2xl font-bold mb-1 leading-7 tracking-[-0.0045em]">{{ heading }}</h3>
    <p class="text-sm leading-4 text-secondary-text mb-6">{{ description }}</p>

    <SettingsCard :options="{ title: 'Email' }">
      <div class="flex flex-col lg:flex-row lg:items-center">
        <DisabledInputWrapper>{{ email.data }}</DisabledInputWrapper>

        <p
          style="font-family: 'Open Sans', sans-serif;"
          class="font-semibold leading-4 text-sm mt-2 lg:mt-0"
        >
          {{ email.info }}
        </p>
      </div>
    </SettingsCard>

    <SettingsCard :options="{ title: 'Mobile Number' }">
      <div>
        <div class="flex flex-col lg:flex-row lg:items-center justify-between">
          <DisabledInputWrapper>
            <img
              :src="require('@/assets/img/pages/profile/info-icon.svg')"
              alt="Info icon"
              class="mr-2.5"
            />
            <p class="text-secondary-text">{{ mobile.data }}</p>
          </DisabledInputWrapper>

          <p class="font-medium text-sm text-primary cursor-pointer mt-2 lg:mt-0">
            + <span class="border-b border-solid border-primary leading-4">{{ mobile.addBtn }}</span>
          </p>
        </div>

        <div class="mt-6 mb-11 flex flex-col lg:flex-row items-center text-sm text-footer-nav leading-4">
          <p class="mr-8 mb-2 lg:mb-0">{{ mobile.notDeliver.description }}</p>
          <TimeSelect /><p class="mx-3 my-3 lg:my-0">Until</p><TimeSelect />
        </div>

        <div class="border-t border-solid border-border text-xs font-medium text-secondary-text">
          <p class="p-1 max-w-[640px]">{{ mobile.description }}</p>
        </div>
      </div>
    </SettingsCard>

    <SettingsCard :options="fairValueUpdates">
      <FairValueUpdates :items="fairValueUpdates.items" />
    </SettingsCard>

    <SettingsCard :options="notifications">
      <Notifications :items="notifications.items" />
    </SettingsCard>

    <Accordions :options="triggers" />
  </div>
</template>

<script>
  import SettingsCard from "@/components/universal/SettingsCard";
  import DisabledInputWrapper from "@/components/universal/DisabledInputWrapper";
  import TimeSelect from "@/components/universal/TimeSelect";
  import FairValueUpdates from "@/components/pages/profile/FairValueUpdates";
  import Notifications from "@/components/pages/profile/Notifications"
  import Accordions from "@/components/pages/profile/Accordions";

  export default {
    components: {
      FairValueUpdates,
      TimeSelect,
      DisabledInputWrapper,
      SettingsCard,
      Notifications,
      Accordions
    },
    data: () => ({
      heading: 'Notification & Alerts',
      description: 'Customize the notification and alerts experience',
      email: {
        data: 'konstantinos.a@toptal.com',
        info: 'This is the same email you have in your profile account.'
      },
      mobile: {
        data: 'Not provided',
        addBtn: 'Add Phone Number',
        notDeliver: {
          description: 'Do not deliver SMS between :'
        },
        description: 'By providing your phone number, you agree to receive text messages from triggers you enable on your account. Equityset never will share your phone number with third parties.'
      },
      fairValueUpdates: {
        heading: 'Fair Value updates',
        items: [
          { title: 'Daily', description: 'Securites that hit their Fair Value', sms: false, email: false },
          { title: 'Weekly', description: 'Securites that hit their Fair Value', sms: false, email: false },
        ]
      },
      notifications: {
        heading: 'Notifications',
        title: 'Select which types of emails you would like to receive',
        items: [
          { title: 'Investor Summary', other: 'Recommended', description: 'Important product updates from Equityset. New features and new research tools', active: true },
          { title: 'Important updates', description: 'Important product updates from Equityset. New features and new research tools', active: false },
          { title: 'Marketing Campaigns', description: 'Offers, discounts, referrals and other exclusive offers', active: false },
          { title: 'Account and Security', description: 'Emails about suspicious login attempts', active: false },
        ]
      },
      triggers: {
        heading: 'Triggers',
        items: [
          { id: '1', title: 'Stock Price and Fair Value & Price', items: [] },
          {
            id: '2',
            title: 'Stock Rating Changes',
            items: [
              {
                id: '2-1',
                title: 'APPL',
                company: 'Apple Computers Inc.',
                when: { label: 'Rating Change', text: 'ANY' },
                sms: false,
                email: true,
                inSummary: true
              },
              {
                id: '2-2',
                title: 'DIS',
                company: 'Walt Disney Co',
                when: { label: 'Rating Change', text: 'BUY' },
                sms: false,
                email: true,
                inSummary: true
              },
              {
                id: '2-3',
                title: 'DELL',
                company: 'Securites that hit their Fair Value',
                when: { label: 'Rating Change', text: 'SELL' },
                sms: false,
                email: true,
                inSummary: true
              }
            ],
          },
          {
            id: '3',
            title: 'Stock Rating Changes',
            items: [
              {
                id: '3-1',
                title: 'S&P 500',
                company: 'Apple   Inc.',
                when: { label: 'Rating Change', text: 'On Announcement, On announced date, On divident date' },
                sms: false,
                email: true,
                inSummary: true
              },
              {
                id: '3-2',
                title: 'S&P 500',
                company: 'Walt Disney Co',
                when: { label: 'Earnings', text: 'Announcement' },
                sms: false,
                email: true,
                inSummary: true
              }
            ]
          },
          {
            id: '4',
            title: 'Dividents & Earning',
            items: [
              {
                id: '4-1',
                title: 'APPL',
                company: 'Apple Computers Inc.',
                when: { label: 'Rating Change', text: 'ANY' },
                sms: false,
                email: true,
                inSummary: true
              },
            ]
          },
          { id: '5', title: 'Valuation Technical Analysis', items: [] },
          { id: '6', title: 'Ideas & News', items: [] },
        ]
      }
    })
  }
</script>
