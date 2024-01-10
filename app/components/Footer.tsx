import Link from "next/link";
import React from "react";

const Footer = () => {
  const links = [
    {
      title: "Nous connaître",
      links: [
        {
          name: "À propos d'irone bones",
        },
        {
          name: "Carrières",
        },
        {
          name: "Actualités",
        },
        {
          name: "Contacter-nous",
        },
      ],
    },
    {
      title: "Menu rapide",
      links: [
        {
          name: "Annonces",
        },
        {
          name: "Transactions",
        },
        {
          name: "Services",
        },
        {
          name: "Equipements",
        },
      ],
    },
    {
      title: "Mon compte",
      links: [
        {
          name: "Tableau de bord",
        },
        {
          name: "Mes demandes",
        },
        {
          name: "Messages",
        },
        {
          name: "Paramètres",
        },
      ],
    },
    {
      title: "Besoin d'aide ?",
      links: [
        {
          name: "Devenez Partenaire",
        },
        {
          name: "Service Client",
        },
        {
          name: "Accessibilité",
        },
        {
          name: "Réclamations",
        },
      ],
    },
  ];
  return (
    <footer>
      <div className="bg-slate-200 py-10 px-3">
        <div className="container m-auto">
          <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {links.map((link) => {
              return (
                <div key={link.title}>
                  <h4 className="font-bold mb-3">{link.title}</h4>
                  {link.links.map((li) => {
                    return (
                      <div key={li.name} className="mb-3">
                        <Link href={"#"}>{li.name}</Link>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="p-3 flex">
        <div className="container m-auto">
          <div className="flex flex-col-reverse gap-3 md:flex-row justify-between">
            <div className="flex gap-2 flex-col md:flex-row items-start justify-center md:items-center">
              <img src="/logo.png" className="h-[30px] object-cover" />
              <div className="text-xs">
                © 2024 Copyright. Iron Bones - All rights reserved
              </div>
            </div>
            <div className="border border-gray-200"></div>
            <div className="text-xs flex-1 flex-grow flex items-center justify-end">
              Conditions générales - Vos informations personnelles - Cookies -
              Site map
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
