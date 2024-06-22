// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { updateEmail } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD25Nwjni7rkUFtO-y4HOTqZOO7tF-QigA",
  authDomain: "netflix-573b4.firebaseapp.com",
  projectId: "netflix-573b4",
  storageBucket: "netflix-573b4.appspot.com",
  messagingSenderId: "726853716855",
  appId: "1:726853716855:web:41b5d9e14ff144bc09af72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signUp = async(name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user
        await addDoc(collection(db,'user'),{
            uid : user.uid,
            name,
            authProvider : 'local',
            email
        })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))
    }
}

const logIn = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(' '))

    }
}

const logOut = async()=>{
    signOut(auth)
}

export {auth,db,logIn,signUp,logOut}