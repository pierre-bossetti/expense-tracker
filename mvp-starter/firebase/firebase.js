/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBz9QqTeGaQCW7C0B7OWSj1zZ5-e3xy9d4',
  authDomain: 'expense-tracker-29a50.firebaseapp.com',
  projectId: 'expense-tracker-29a50',
  storageBucket: 'expense-tracker-29a50.firebasestorage.app',
  messagingSenderId: '96601406365',
  appId: '1:96601406365:web:9aa72adb4a2b6ca04bcd74',
  measurementId: 'G-5D5HCX4685',
}

initializeApp(firebaseConfig)

export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
