import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'

// ... other firebase imports

const firebaseConfig = {
  apiKey: 'AIzaSyAR84yRMSxqodyPoQbyYso0iNo6T--qZ7g',
  authDomain: 'personal-project-4ac6f.firebaseapp.com',
  projectId: 'personal-project-4ac6f',
  storageBucket: 'personal-project-4ac6f.appspot.com',
  messagingSenderId: '337096134393',
  appId: '1:337096134393:web:0a45f01c4a88578d839c28',
}

export const firebaseApp = initializeApp(firebaseConfig)

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')
