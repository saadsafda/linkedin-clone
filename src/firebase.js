import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBSquQmqEay13-jXRLxSRNtH8ZOAuvymus",
  authDomain: "linkedin-clone-1a91d.firebaseapp.com",
  projectId: "linkedin-clone-1a91d",
  storageBucket: "linkedin-clone-1a91d.appspot.com",
  messagingSenderId: "912040768414",
  appId: "1:912040768414:web:4c33fd6945cf3ccf795c8f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
