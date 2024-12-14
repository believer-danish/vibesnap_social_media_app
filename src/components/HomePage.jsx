import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { child } from "firebase/database";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("sign in ");
        navigate("/reels");
      } else {
        navigate("/login");
        console.log("sign out");
      }
    });
  }, []);

  return <Outlet />;
};

export default HomePage;
