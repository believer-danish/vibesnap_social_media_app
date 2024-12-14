import {
  ref,
  set,
  onValue,
  child,
  get,
  remove,
  update,
} from "firebase/database";

import {
  deleteObject,
  getDownloadURL,
  ref as sRef,
  uploadBytes,
} from "firebase/storage";
import { database, storage, fireStore } from "../utils/firebase";
import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";

const Testing = () => {
  console.log("render");
  const [file, setFile] = useState(null);

  const [isupdate, setUpdate] = useState(false);
  const [userList, setUserList] = useState([]);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");
  const db = database;

  async function writeUserData(userId, name, email) {
    // Storing image in firebase storage
    const userImageRef = sRef(storage, "users/" + userId);

    await uploadBytes(userImageRef, file);
    const imgUrl = await getDownloadURL(userImageRef);
    console.log(imgUrl);

    // writing in realtime data base
    if (isupdate) {
      //
    } else {
      const docRef = await addDoc(collection(fireStore, "users"), {
        name: name,
        email: email,
        imgUrl: imgUrl,
      });
      console.log("Document written with ID: ", docRef.id);
    }
  }
  useEffect(() => {
    async function getData() {
      const q = query(collection(fireStore, "users"));

      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      console.log(data);
      setUserList(data);
    }

    getData();
  }, []);

  async function handleDelete(id) {
    const imageRef = sRef(storage, "users/" + id);
    deleteObject(imageRef);

    await deleteDoc(doc(fireStore, "users", "sxj9Rbk6zzVZoySouWFz"));
  }
  function handleUpdate(id, name, email) {
    console.log(id, name, email);
    setUserId(id);
    setUserEmail(email);
    setUserName(name);
    setUpdate(true);
  }

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    writeUserData(userId, userName, userEmail);
  }

  return (
    <div className="h-screen w-full flex  flex-col gap-16 justify-start items-center mt-20">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          onChange={(e) => {
            setUserId(e.target.value);
          }}
          value={userId}
          type="text"
          placeholder="Enter Id"
          className="border my-2 px-2 py-1"
        />
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          value={userName}
          type="text"
          placeholder="Enter name"
          className="border my-2 px-2 py-1"
        />
        <input
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
          value={userEmail}
          type="email"
          placeholder="Enter email"
          className="border my-2 px-2 py-1"
        />
        <input
          onChange={(e) => handleFileChange(e)}
          type="file"
          name="file"
          id="file"
        />
        <button className="px-4 py-2 bg-purple-500 my-4">Submit</button>
      </form>

      {/* user list */}
      <div>
        <h1 className="flex gap-6 font-bold text-2xl">
          <span>Id</span>
          <span>image</span>
          <span>Name</span>
          <span>Email</span>
        </h1>
        {userList?.map((e, i) => (
          <div key={i} className="flex my-3 gap-8">
            <h1 className="flex gap-6">
              <span> {}</span>
              <img
                src={e.imgUrl}
                alt="user image"
                className="rounded-full  bg-red-400 w-10 h-10 overflow-hidden"
              />
              <span>{e.name}</span> <span>{e.email}</span>
            </h1>
            <button
              onClick={() => handleDelete(e[0])}
              className="bg-purple-600 py-1 px-2 rounded-2xl"
            >
              delete
            </button>

            <button
              onClick={() => handleUpdate(e[0], e[1]?.username, e[1]?.email)}
              className="bg-purple-600 py-1 px-2 rounded-2xl"
            >
              update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testing;
