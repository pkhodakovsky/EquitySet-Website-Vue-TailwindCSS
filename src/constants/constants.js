const WINDOW_SCREEN = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280
}
export {
  WINDOW_SCREEN
}
export const LAYOUTS = {
  DEFAULT: 'Default',
  PREMIUM: 'Premium'
}

export const TIME_PERIOD = [
  { id: '1', title: '1D', data: '1d' },
  { id: '2', title: '7D', data: '7d' },
  { id: '3', title: '1M', data: '1m' },
  { id: '4', title: '3M', data: '3m' },
  { id: '5', title: 'Last Years', data: '5y', active: true },
  { id: '6', title: '1Y', data: '1y' },
  { id: '7', title: 'YTD', data: 'ytd' },
  { id: '8', title: 'Custom', children: ['', ''] },
]
