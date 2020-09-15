// 跨域代理前缀
const API_PROXY_PREFIX='/proxy'
const BASE_URL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API_BASE_URL : API_PROXY_PREFIX
// const BASE_URL = process.env.VUE_APP_API_BASE_URL
module.exports = {
  LOGIN: `${BASE_URL}/api/pub/login`,
  ROUTES: `${BASE_URL}/routes`
}
