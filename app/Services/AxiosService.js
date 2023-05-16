export const triviaApi = axios.create({
  // baseURL: 'https://opentdb.com/',
  timeout: 8000,
  withCredentials: false
})


triviaApi.interceptors.request.use(config => config, handleAxiosError)
triviaApi.interceptors.response.use(response=> response, handleAxiosError)


function handleAxiosError(error){
if (error.response) {
  console.warn('[AXIOS_ERROR_RES_DATA]', error.response.data)

}else if (error.request){
  console.warn('[AXIOS_ERROR_NO_RESPONSE]', error.request)
} else {
  
  console.warn('[AXIOS_ERROR_INVALID_REQUEST]', error.message)
}
return Promise.reject(error)

}