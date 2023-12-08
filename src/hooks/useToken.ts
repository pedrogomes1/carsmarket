import { useState } from 'react'
import { api } from '../libs/api'

export function useToken() {
  const [userToken, setUserToken] = useState('')

  function updateToken(token: string) {
    setUserToken(token)
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  function resetToken() {
    setUserToken('')
  }

  return { userToken, setUserToken, updateToken, resetToken }
}
