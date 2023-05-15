import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBIjtfPFz9v7uPmAeVf3EV_fsXwR08lbBw",
  authDomain: "dev-chat-7c2fc.firebaseapp.com",
  databaseURL: "https://dev-chat-7c2fc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dev-chat-7c2fc",
  storageBucket: "dev-chat-7c2fc.appspot.com",
  messagingSenderId: "938786961202",
  appId: "1:938786961202:web:1dc7dbae47e7f82d52c92b",
  measurementId: "G-1KWS5CYNCJ"
};
firebase.initializeApp(firebaseConfig);

export default firebase;

