"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { auth } from "../utils/firebase";
import { User } from "firebase/auth";
import PubModal from "./components/PubModal";
import {
  BiEdit,
  BiMessageRounded,
  BiShow,
  BiSolidTime,
  BiSolidUser,
  BiTrash,
} from "react-icons/bi";

const page = () => {
  const [user, setUser] = useState<User | null>();
  const pubs = [
    {
      img: "/truck.png",
      name: "Tracteur BTP",
    },
    {
      img: "/lion.png",
      name: "Zoomlion 45m de flèche 30/50/80 tonnes...",
    },
    {
      img: "/house.png",
      name: "Plan R+1 de 8 chambres",
    },
    {
      img: "/ho.png",
      name: "Plan de maison 2D",
    },
  ];
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  return (
    <section className="min-h-screen bg-slate-100">
      <Header />
      <div className="flex flex-col gap-5">
        <h1 className="text-4xl mt-5">Compte</h1>
        <div className="flex justify-end">
          <PubModal />
        </div>
        <div className="card shadow bg-white">
          <div className="card-body flex flex-col gap-5">
            <h3 className="text-2xl font-bold">Mes publications</h3>
            <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {pubs.map((pub) => {
                return (
                  <div key={pub.name} className="flex flex-col gap-3">
                    <article className="border rounded-box overflow-clip flex-1">
                      <img
                        className=" h-[200px] w-full object-cover"
                        src={pub.img}
                        alt=""
                      />
                      <div className="p-3">
                        <div className="flex justify-between">
                          <span className="flex gap-2">
                            <BiSolidUser className="text-xl" /> Username
                          </span>
                          <span className="flex gap-2">
                            <BiSolidTime className="text-xl" /> Il y a: 1H
                          </span>
                        </div>
                        <hr className="mb-3" />
                        <h3 className="text-center text-2xl font-bold text-gray-500">
                          {pub.name}
                        </h3>
                      </div>
                    </article>
                    <button className="btn btn-accent rounded-badge">
                      <BiEdit className="text-xl" /> Modifier
                    </button>
                    <button className="btn btn-error text-white rounded-badge">
                      <BiTrash className="text-xl" /> Supprimer
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
