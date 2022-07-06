import axios from 'axios'

// const baseUrl = process.env.API_URL
// const token = process.env.API_KEY

const baseUrl = 'https://cloud.iexapis.com/stable/stock/tsla/chart'
const token = 'pk_aa56e786b3574c3a8672ceac3e41ce77'

export const buildUrl = endpoint => {
  const timeTracker = endpoint ? `/${endpoint}` : ''
  return `${baseUrl}${timeTracker}?token=${token}`
}

const AxiosService = {
  get(endpoint, config = {}) {
    return axios.get(buildUrl(endpoint))
  },
  post(endpoint, { data, headers } = {}) {
    return axios({
      url: buildUrl(endpoint),
      method: 'POST',
      headers: headers || { 'Content-Type': 'application/json' },
      data,
    })
  },
  put(endpoint, { data, headers }) {
    return axios({
      url: buildUrl(endpoint),
      method: 'PUT',
      headers: headers || { 'Content-Type': 'application/json' },
      data,
    })
  },
  patch(endpoint, { data }) {
    return axios({
      method: 'PATCH',
      url: buildUrl(endpoint),
      data,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  delete(endpoint) {
    return axios({
      method: 'DELETE',
      url: buildUrl(endpoint),
    })
  },

  registerUnauthorizedListener(router) {
    axios.interceptors.response.use(null, error => {
      if (error.response && [401, 403].includes(error.response.status)) {
        router.push({ name: 'login' })
      } else {
        if (error.response) {
          console.error(error.response)
        } else {
          console.error(error)
        }
      }
      return Promise.reject(error)
    })
  },
}

export default AxiosService
