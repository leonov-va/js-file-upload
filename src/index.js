import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import "./libs/file-upload/index.css";
import { fileUpload } from "./libs/file-upload/index.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc77lLNLeCI8Yv6auV10zpoT1LH8eS7FM",
  authDomain: "file-upload-8a17c.firebaseapp.com",
  projectId: "file-upload-8a17c",
  storageBucket: "file-upload-8a17c.appspot.com",
  messagingSenderId: "4964423175",
  appId: "1:4964423175:web:fc1332867d86cf39653ca2",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

// Initialize FileUpload plugin
fileUpload("#file", {
  multi: true,
  accept: [".png", ".jpg", ".jpeg", ".gif"],
  onUpload(files, blocks) {
    files.forEach((file, index) => {
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (
            (snapshot.bytesTransferred / snapshot.totalBytes) *
            100
          ).toFixed(0);

          const block = blocks[index].querySelector(".fu-preview__progress");
          block.textContent = progress;
          block.style.width = `${progress}%`;
        },
        (error) => console.error(error),
        () => console.log("Successful uploads on complete")
      );
    });
  },
});
