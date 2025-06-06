import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
  } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0mNnrxiRGb0O2YopbCwJ_j9sg9JwJL0I",
  authDomain: "db-parcialfinal.firebaseapp.com",
  projectId: "db-parcialfinal",
  storageBucket: "db-parcialfinal.firebasestorage.app",
  messagingSenderId: "526934525100",
  appId: "1:526934525100:web:5d4175c695aa26245e4b09",
  measurementId: "G-YTP4R2SMZJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
const auth = getAuth(app);

const registerUser = async (email: string, password: string) => {
	try {
    console.log("Registering user with email:", email);
		const userCredential = await createUserWithEmailAndPassword(auth, email, password);
		console.log(userCredential.user);
		return { isRegistered: true, user: userCredential };
	} catch (error) {
		console.error(error);
		return { isRegistered: false, error: error };
	}
};

const loginUser = async (email: string, password: string) => {
  try {
    console.log("Logging in user with email:", email);
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
    return { isLoggedIn: true, user: userCredential };
  } catch (error) {
    console.error(error);
    return { isLoggedIn: false, error: error };
  }
}

export { app, db, auth, registerUser, loginUser};



