import React from "react";
import Header from "./components/Header";
import Image from "next/image";

const page = () => {
  return (
    <div>
      <section className=" container m-auto mb-5">
        <Header />
      </section>
      <section className="container m-auto mb-5 grid grid-flow-row  grid-cols-1 md:grid-cols-2">
        <div className="md:order-1 min-h-[200px] min-w-[200px]">
          <img
            src={"/hero.svg"}
            alt="Image construction"
            className="w-auto h-auto max-h-[400px] max-w-[400px] m-auto"
          />
        </div>
        <div className="flex items-center justify-center md:order-0">
          <h1 className="text-4xl">
            <div className="text-gray-500">Votre plateforme de</div>
            <div className=" font-extrabold text-gray-500 text-8xl">
              B2B & B2C
            </div>
            <div className="text-gray-500">pour le marché du BTP</div>
          </h1>
        </div>
      </section>
      <section className="container m-auto">
        <div className="carousel gap-3">

          <div className="carousel-item relative overflow-clip shadow-lg">
            <img
              className="h-[200px] w-[300px] object-cover rounded-box"
              src="/matos.jpeg"
              alt="Burger"
            />
            <div className="absolute bg-gradient-to-b from-transparent to-gray-700 hover:to-accent transition-all duration-300 h-full w-full rounded-box flex items-end p-3">
              <div className="text-white">
                <h3 className="font-bold text-xl">Fournisseur de matériaux</h3>
                <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          <div className="carousel-item relative overflow-clip shadow-lg">
            <img
              className="h-[200px] w-[300px] object-cover rounded-box"
              src="/indep.jpg"
              alt="Burger"
            />
            <div className="absolute bg-gradient-to-b from-transparent to-gray-700 hover:to-accent transition-all duration-300 h-full w-full rounded-box flex items-end p-3">
              <div className="text-white">
                <h3 className="font-bold text-xl">Indépendants</h3>
                <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          <div className="carousel-item relative overflow-clip shadow-lg">
            <img
              className="h-[200px] w-[300px] object-cover rounded-box"
              src="/po.jpg"
              alt="Burger"
            />
            <div className="absolute bg-gradient-to-b from-transparent to-gray-700 hover:to-accent transition-all duration-300 h-full w-full rounded-box flex items-end p-3">
              <div className="text-white">
                <h3 className="font-bold text-xl">Entreprises de construction</h3>
                <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          <div className="carousel-item relative overflow-clip shadow-lg">
            <img
              className="h-[200px] w-[300px] object-cover rounded-box"
              src="/we.jpg"
              alt="Burger"
            />
            <div className="absolute bg-gradient-to-b from-transparent to-gray-700 hover:to-accent transition-all duration-300 h-full w-full rounded-box flex items-end p-3">
              <div className="text-white">
                <h3 className="font-bold text-xl">Experts consultants</h3>
                <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          <div className="carousel-item relative overflow-clip shadow-lg">
            <img
              className="h-[200px] w-[300px] object-cover rounded-box"
              src="/o.jpg"
              alt="Burger"
            />
            <div className="absolute bg-gradient-to-b from-transparent to-gray-700 hover:to-accent transition-all duration-300 h-full w-full rounded-box flex items-end p-3">
              <div className="text-white">
                <h3 className="font-bold text-xl">Autres...</h3>
                <p className="text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default page;
