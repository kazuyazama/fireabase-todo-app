import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useAuthUser } from "../context/user";
import { auth, provider } from "../firebase";

const Login = () => {

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        alert("ログインに成功しました");
        window.location.href = "/";
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className=" grid place-items-center h-screen">
      <div className="w-80 h-80 grid place-items-center shadow shadow-slate-700 rounded-2xl">
        <button className="text-lg" onClick={handleLogin}>ログイン</button>
      </div>
    </div>
  );
};

export default Login;
