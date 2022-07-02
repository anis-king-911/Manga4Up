import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import {
  getDatabase, ref, child, onValue,
  query, orderByChild, limitToLast
} from "https://www.gstatic.com/firebasejs/9.8.3/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwI_lwV52VuKJYjeSID811WEv5u2AF70w",
  authDomain: "manga4up-vercel.firebaseapp.com",
  databaseURL: "https://manga4up-vercel-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "manga4up-vercel",
  storageBucket: "manga4up-vercel.appspot.com",
  messagingSenderId: "1063989292418",
  appId: "1:1063989292418:web:427fb5e5422fc4858bf39b"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let path = 'Manga4Up/', blog = 'blog/', order = 'Volume Data/Time';
let list = [], uniqueIds = [];

export {database, ref, child, onValue, query, orderByChild, limitToLast}
export {path, blog, order, list, uniqueIds}
