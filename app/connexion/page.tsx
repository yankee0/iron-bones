"use client";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../utils/firebase";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [err, setErr] = useState(false);
  const provider = new GoogleAuthProvider();
  const googleSignInProtocol = () => {
    signInWithPopup(auth, provider).then((res) => {
      console.log(res);
    });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/compte");
      }
    });
  }, []);
  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-slate-50">
      <form
        action=""
        className="card rounded-box bg-white shadow-md w-full max-w-md flex flex-col gap-3"
      >
        <div className="card-body flex flex-col gap-3">
          <div className="text-xl font-bold">Connexion</div>
          {err && (
            <span className="alert text-center alert-error text-white">
              Ce compte n'existe pas
            </span>
          )}
          <input
            type="email"
            placeholder="Votre email"
            className="input input-bordered w-full"
            disabled
          />
          <input
            type="password"
            placeholder="Votre mot de passe"
            className="input input-bordered w-full"
            disabled
          />
          <button className="btn btn-primary" disabled>Se connecter</button>
          <button
            onClick={() => googleSignInProtocol()}
            className="btn"
            type="button"
          >
            <FcGoogle size={"2rem"} /> Se connecter avec Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
