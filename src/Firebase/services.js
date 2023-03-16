import { db } from "./config";
import { collection, addDoc } from "firebase/firestore";

export const addDocument = async (collectionName, data) => {
  const docRef = await addDoc(collection(db, collectionName), data)
  try {
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.log(error);
  }
};
