"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { User, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";


const LoginButton = () => {
  const [user, setUser] = useState<User | null>();
  const router = useRouter();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });
  }, []);

  return (
    <div className="flex items-center gap-2">
      {user ? (
        <>
          <div className="avatar">
            <div className="w-12">
              <img
                src={user.photoURL || ""}
                alt={user.displayName || ""}
                className="rounded-full"
              />
            </div>
          </div>
          <button onClick={() => {signOut(auth);router.push("/")}} className="btn btn-error">
            Se déconnecter
          </button>
        </>
      ) : (
        <Link href={"/connexion"} className="btn btn-primary">
          Se connecter
        </Link>
      )}
    </div>
  );
};

export default LoginButton;
