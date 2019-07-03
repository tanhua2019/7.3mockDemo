import axios from 'axios'

axios.interceptors.request.use(
  config => {
    return config;
  },
  (err) => {
    return Promise.reject(err)
  }
)

axios.interceptors.response.use(
  response => {
    return response;
  },
  (err) => {
    return Promise.reject(err)
  }
)

export function require(url,params) {
  return new Promise((resolve,reject) => {
    axios.post(url,params).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

export default {
  http(url,params) {
    return require(url,params)
  }
}
