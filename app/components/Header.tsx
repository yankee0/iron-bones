import React from "react";

const Header = () => {
  return (
    <header className="navbar shadow-xl rounded-2xl">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl ">IRON BONES</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Accueils</a>
          </li>
          <li>
            <a>Annonces</a>
          </li>
          <li>
            <a>Transactions</a>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2">
                <li>
                  <a>Bla bla 1</a>
                </li>
                <li>
                  <a>Bla bla 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Matériaux</a>
          </li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Rechercher..."
            className="input input-bordered w-24 md:w-auto hidden md:flex"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Mon compte</a>
            </li>
            <li>
              <a>Déconnexion</a>
            </li>
          </ul>
        </div>
        <button className="btn btn-primary">Publier</button>
      </div>
    </header>
  );
};

export default Header;
