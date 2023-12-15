import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://carsmarket-server-pedrogomes1.vercel.app/',
})
