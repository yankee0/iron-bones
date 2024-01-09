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
          name: "Parametres",
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
    <div>
      <div className="bg-slate-200 py-10">
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
          <div className="flex justify-between">
            <div className="flex gap-2 items-end">
              <img src="/logo.png" className="h-[30px]" /> © 2024 Copyright.
              Iron Bones - All rights reserved
            </div>
            <div className="border border-gray-500"></div>
            <div>
              Conditions générales - Vos informations personnelles - Cookies -
              Site map
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
