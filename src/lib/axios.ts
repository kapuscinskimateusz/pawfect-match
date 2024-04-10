import axios from 'axios'
import { getToken } from '../services/apiPetfinder'

const axiosInstance = axios.create({
    baseURL: 'https://api.petfinder.com/v2',
})

axiosInstance.interceptors.request.use(
    (request) => {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken) {
            request.headers.Authorization = `Bearer ${accessToken}`
        }

        return request
    },
    (error) => Promise.reject(error)
)

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true

            try {
                const { access_token: accessToken } = await getToken()

                localStorage.setItem('accessToken', accessToken)

                originalRequest.headers.Authorization = `Bearer ${accessToken}`
                return axios(originalRequest)
            } catch (error) {
                localStorage.removeItem('accessToken')

                return Promise.reject(error)
            }
        }

        return Promise.reject(error)
    }
)

export default axiosInstance
