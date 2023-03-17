import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { storage } from "./config";

const getLink = (image) => {
  const storageRef = ref(storage, "images/"+image.name);
  return new Promise((resolve)=>{
    uploadString(storageRef, image.thumbUrl.split(',')[1], 'base64')
    .then(() => {
      getDownloadURL(storageRef) //3
        .then((url) => {
          resolve(url);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
  })
};

export const getImageURL = async (fileList) => {
  //1
  let returnURL = [];
  for (const image of fileList) {
    console.log(image);
    const newLink = await getLink(image);
    returnURL.push(newLink)
  }
  console.log(returnURL);
  return returnURL
};
