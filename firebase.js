import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIQchSxrencVvBRs12WHe51GICEXdbCXg",
  authDomain: "sawe-f7ddd.firebaseapp.com",
  projectId: "sawe-f7ddd",
  storageBucket: "sawe-f7ddd.appspot.com",
  messagingSenderId: "35002777895",
  appId: "1:35002777895:web:7f34a4fcde8bb05a43e902",
  measurementId: "G-BVEZX4M0RS"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
