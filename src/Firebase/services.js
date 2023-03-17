import { db } from "./config";
import { collection, addDoc, getDocs, where, query, doc } from "firebase/firestore";

export const addDocument = async (collectionName, data) => {
  const docRef = await addDoc(collection(db, collectionName), data)
  try {
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.log(error);
  }
};

export const addNewItemForUser = async (collectionName, uid, subCollectionName, data) =>{
  const docRef = doc(db, collectionName, uid);
  const colRef = collection(docRef, subCollectionName);
  const id = await addDoc(colRef, data);
  try {
    console.log(id);
  } catch (error) {
    
  }
}

export const getAll = async(collectionName)=>{
  const collectionRef = collection(db, collectionName);
  const docSnap = await getDocs(
    query(
      collectionRef
    )
  )
  const arr = [];
  try {
    docSnap.forEach((doc)=>{
      arr.push(doc.data());
    })
  } catch (error) {
    console.log(error);
  }
  return (
    arr
  )
}


export const getAccount = async (collectionName, condition) =>{
  const collectionRef = collection(db, collectionName);
  const docSnap = await getDocs(
    query(
      collectionRef,
      where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      )
    )
  )
  const arr = [];
  try {
    docSnap.forEach((doc)=>{
      arr.push(doc.data());
      console.log(doc.data());
    })
  } catch (error) {
    console.log(error);
  }
  return (
    arr
  )
}

