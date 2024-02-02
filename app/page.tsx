import React from "react";
import Header from "./components/Header";
import Link from "next/link";
import {
  BiSolidUser,
  BiSolidTime,
  BiShow,
  BiMessageRounded,
} from "react-icons/bi";
import Footer from "./components/Footer";

const page = () => {
  const categories = [
    {
      img: "/fournisseur.png",
      label: "Fournisseurs de Matériaux",
      url: "#",
    },
    {
      img: "/independant.png",
      label: "Indépendants",
      url: "#",
    },
    {
      img: "/ent.png",
      label: "Entreprises de Constructions",
      url: "#",
    },
    {
      img: "/exp.png",
      label: "Experts Consultants",
      url: "#",
    },
  ];

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

  const partners = [
    {
      img: "/a.png",
    },
    {
      img: "/b.png",
    },
    {
      img: "/c.png",
    },
    {
      img: "/d.png",
    },
    {
      img: "/e.png",
    },
  ];

  const freelancers = [
    {
      name: "Souleymane BA",
      job: "Géni civil",
    },
    {
      name: "Souleymane BA",
      job: "Géni civil",
    },
    {
      name: "Souleymane BA",
      job: "Géni civil",
    },
    {
      name: "Souleymane BA",
      job: "Géni civil",
    },
  ];

  return (
    <div>
      <section className=" container m-auto mb-5">
        <Header />
      </section>
      <section className="container m-auto mb-5 grid grid-flow-row  py-10 grid-cols-1 md:grid-cols-2">
        <div className="md:order-1 min-h-[200px] min-w-[200px]">
          <img
            src={"/hero.png"}
            alt="Image construction"
            className="max-h-[400px] max-w-[400px] object-cover w-full  m-auto"
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
      <div className="bg-gray-100 mb-10 ">
        <section className="container m-auto py-4">
          <h2 className="text-center text-4xl font-bold mb-3 text-gray-500">
            CATEGORIES
          </h2>
          <div className="carousel w-full gap-3 p-5">
            {categories.map((categorie) => {
              return (
                <div className="carousel-item">
                  <Link key={categorie.label} href={categorie.url}>
                    <div className="shadow-lg px-4 py-5 rounded-box bg-white flex items-center gap-3 h-fit">
                      <img
                        src={categorie.img}
                        className="h-[70px]"
                        alt="Fournisseur"
                      />
                      <div className="max-w-[3cm] font-bold text-gray-500">
                        {categorie.label}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <section className="container m-auto mb-5">
        <div className="p-3 py-5 rounded-box border">
          <input
            type="text"
            placeholder="Que cherchez vous..."
            className="input input-bordered w-full mb-3"
          />
          <div className=" grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <select className="select select-bordered w-full ">
              <option disabled >
                Sélectionnez la catégorie
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <select className="select select-bordered w-full ">
              <option disabled >
                Sélectionnez le pays
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <select className="select select-bordered w-full ">
              <option disabled >
                Sélectionnez la région
              </option>
              <option>Han Solo</option>
              <option>Greedo</option>
            </select>
            <button className="btn btn-primary">Rechercher</button>
          </div>
        </div>
      </section>
      <section className="container m-auto mb-10">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-gray-500 text-3xl">
            Publiés récemment
          </h2>
          <div>
            <button className="btn btn-accent">Tout voir</button>
          </div>
        </div>
        <hr className="mb-3" />
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
                  <BiShow className="text-xl" /> Voir l'annonce
                </button>
                <button className="btn btn-primary rounded-badge">
                  <BiMessageRounded className="text-xl" /> Message
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container m-auto overflow-clip mb-10">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-gray-500 text-3xl">
            Entreprises et Partenaires
          </h2>
          <div>
            <button className="btn btn-accent">Tout voir</button>
          </div>
        </div>
        <hr className="mb-3" />
        <div className="carousel w-full gap-3 p-5">
          {partners.map((partner) => {
            return (
              <div key={partner.img} className="carousel-item">
                <div>
                  <div className="border px-4 py-5 rounded-box bg-white flex items-center gap-3 h-fit">
                    <img
                      src={partner.img}
                      className="h-[100px] w-[200px] object-cover"
                      alt="Fournisseur"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="container m-auto overflow-clip mb-10">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-bold text-gray-500 text-3xl">Indépendants</h2>
          <div>
            <button className="btn btn-accent">Tout voir</button>
          </div>
        </div>
        <hr className="mb-3" />
      </section>

      <section className="container m-auto overflow-clip mb-10">
        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {freelancers.map((freelancer, index) => {
            return (
              <article
                key={index}
                className="border rounded-box p-3 flex flex-col items-center gap-3"
              >
                <img
                  src="/ha.png"
                  className="h-[100px] w-[100px] object-cover rounded-full m-auto"
                  alt=""
                />
                <h4 className="text-2xl">{freelancer.name}</h4>
                <h5 className="text-gray-500">{freelancer.job}</h5>
                <h5 className=" font-bold text-blue-400">voir son portfolio</h5>
              </article>
            );
          })}
        </div>
      </section>

      <hr className="mb-3" />
      <section className="container m-auto text-center text-gray-400 font-light mb-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit
      </section>

      <Footer />
    </div>
  );
};

export default page;
