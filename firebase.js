import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
	apiKey: "AIzaSyBSXsk88HALTSUfc4uzjHV7Pjnq10oa0UE",
	authDomain: "blog-83fa1.firebaseapp.com",
	projectId: "blog-83fa1",
	storageBucket: "blog-83fa1.appspot.com",
	messagingSenderId: "1045548113513",
	appId: "1:1045548113513:web:d297b9bca4cb1bc5db0cf8",
};

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export { auth, db, storage, serverTimestamp };
