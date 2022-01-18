import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCLA1NJsQ35rLHNJUDFS4hi7N6kdF8rIgc",
  authDomain: "quickstart-1603162024563.firebaseapp.com",
  projectId: "quickstart-1603162024563",
  storageBucket: "quickstart-1603162024563.appspot.com",
  messagingSenderId: "478412351561",
  appId: "1:478412351561:web:49927c831b5e90f1ce3798",
  measurementId: "G-H7DQN8PLFD"
  };
const app = (!firebase.apps.length )
            ? firebase.initializeApp(firebaseConfig) 
            : firebase.app();

const db=app.firestore();

export {db}

  };
const app = (!firebase.apps.length )
            ? firebase.initializeApp(firebaseConfig) 
            : firebase.app();

const db=app.firestore();

export {db}
