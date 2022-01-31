import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDfeDYHwqseDZAoPxGMzqI8gN9axq1RfP8",
  authDomain: "wuzzuf-project.firebaseapp.com",
  projectId: "wuzzuf-project",
  storageBucket: "wuzzuf-project.appspot.com",
  messagingSenderId: "468922707390",
  appId: "1:468922707390:web:fc1f9417234a4487fc9def",
  measurementId: "G-8GSMJ17PT4"
};
class Firebase {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.auth = firebase.auth();
    this.db = firebase.firestore();
  }

  async getJobs() {
    let JobArray = [];

    const explorJob = await firebase
      .firestore()
      .collection("jobApplication")
      .get();
    explorJob.forEach((doc) => {
      JobArray.push({ id: doc.id, data: doc.data() });
    });
    return JobArray;
  }
}

export default new Firebase();
