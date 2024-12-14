import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";

const ReelsPage = () => {
  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <div className="h-screen grid place-items-center">
      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default ReelsPage;
