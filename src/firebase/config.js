import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBcJUgsK6utL9wTRXBRfJPjfmDC2z05YzQ",
  authDomain: "d1-basicauthentication.firebaseapp.com",
  databaseURL: "https://d1-basicauthentication.firebaseio.com",
  projectId: "d1-basicauthentication",
  storageBucket: "d1-basicauthentication.appspot.com",
  messagingSenderId: "830335058218",
  appId: "1:830335058218:web:3d0aa6219ef482fdcc5e53"
};

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
