import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCTqR3Mk9joU5iJk1OpZSX9uswfHeGzsh8',
  authDomain: 'carsmarket-695af.firebaseapp.com',
  projectId: 'carsmarket-695af',
  storageBucket: 'carsmarket-695af.appspot.com',
  messagingSenderId: '785397015372',
  appId: '1:785397015372:web:b47be2de421b3a411965e9',
}

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
export const db = getFirestore(app)
