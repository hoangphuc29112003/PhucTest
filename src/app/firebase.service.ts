import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import { doc, getFirestore, setDoc,getDocs,collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAnanXP-mX5HGkihVGkqM0Q9gkgto9pIc",
  authDomain: "demoweb-8ddb9.firebaseapp.com",
  projectId: "demoweb-8ddb9",
  storageBucket: "demoweb-8ddb9.appspot.com",
  messagingSenderId: "670550139755",
  appId: "1:670550139755:web:2fdd4f43e0c2efd712e22e",
  measurementId: "G-YPX00M60L9"}

const Firebase = firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }
   async addData() {
//     console.log('get dâta:')
//     const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log('get dâta:',`${doc.id} => ${doc.data()}`);
// });

   FirebaseService
   console.log('firebase1: ',Firebase)

    // const db = getFirestore();
    // const usersCollection = collection(db, 'users');


    //const db = getFirestore();
    //const version = db.version;
    //console.log('Firestore version:', version);
    // Ghi một tài liệu vào collection 'users'.




  //   setDoc(doc(db, 'user'), {
  //     email: 'johndoe@example.com',
  //     pass: 'password',

  //   });
  //  console.log('firebase2: ',db)

  }




}

