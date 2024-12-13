import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyCd61KpG1H5I9mTD7SfV4oB6rNX5KPZiHQ",
  authDomain: "netflix-clone-a4965.firebaseapp.com",
  projectId: "netflix-clone-a4965",
  storageBucket: "netflix-clone-a4965.firebasestorage.app",
  messagingSenderId: "778877456606",
  appId: "1:778877456606:web:0fdeb0ebc9d200c574324f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
