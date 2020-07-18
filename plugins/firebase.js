import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

if(!firebase.apps.length) {
  const config = {
    apiKey: "AIzaSyCwaH8KrJuEHtoIAoY3ckBYLkkddDwV-1A",
    authDomain: "slack-clone-app-4236a.firebaseapp.com",
    databaseURL: "https://slack-clone-app-4236a.firebaseio.com",
    projectId: "slack-clone-app-4236a",
    storageBucket: "slack-clone-app-4236a.appspot.com",
    messagingSenderId: "128733560944",
  }
  firebase.initializeApp(config)
}

const db = firebase.firestore()

export {
  firebase,
  db
}
