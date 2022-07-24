import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBEvYqtDK58dARySUI_3mcS_Vu-TiPRj64",
  authDomain: "dkm-react.firebaseapp.com",
  projectId: "dkm-react",
  storageBucket: "dkm-react.appspot.com",
  messagingSenderId: "950106061618",
  appId: "1:950106061618:web:9c8d32e116f19cbbcc752b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);