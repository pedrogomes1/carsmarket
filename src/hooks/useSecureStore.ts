import * as SecureStore from 'expo-secure-store'

const AUTH_KEY = 'router-manager-token'

export function useSecureStore() {
  async function getSecureStore() {
    const storageToken = await SecureStore.getItemAsync(AUTH_KEY)
    return storageToken
  }

  async function updateSecureStore(token: string) {
    await SecureStore.setItemAsync(AUTH_KEY, token)
  }

  async function deleteSecureStore() {
    await SecureStore.deleteItemAsync(AUTH_KEY)
  }

  return { getSecureStore, updateSecureStore, deleteSecureStore }
}
