import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleProvider, database as default };

// database.ref('accounts').push({
//     surName: 'Nwoke',
//     firstName: 'Promise',
//     otherName: 'Chilee',
//     sex: 'Male',
//     dateOfBirth: 5165165156,
//     localGovt: 'Ahiazu-Mbaise',
//     state: 'Imo State',
//     country: 'Nigeria',
//     createdAt: 5465465465
// });