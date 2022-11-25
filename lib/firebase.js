import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCCIERtT_5J9-Ugq7YS5L-6ave7Tt8m0I8',
  authDomain: 'citrushack2023-705ff.firebaseapp.com',
  projectId: 'citrushack2023-705ff',
  storageBucket: 'citrushack2023-705ff.appspot.com',
  messagingSenderId: '1069791502565',
  appId: '1:1069791502565:web:5bee37868f3e7898ca740c',
  measurementId: 'G-ER3CEN5JFR'
}

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID
// }

const app = initializeApp(firebaseConfig)
const storage = getStorage(app, 'citrushack2023-705ff.appspot.com')

export default storage