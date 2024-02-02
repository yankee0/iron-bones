import React from "react";
import { FcPicture } from "react-icons/fc";

const PubModal = () => {
  return (
    <>
      <button
        className="btn btn-success text-white w-full sm:w-fit"
        onClick={() => {
          try {
            const myModal = document.getElementById("my_modal_5");
            if (myModal) {
              myModal.showModal();
            } else {
              console.log(
                "L'élément avec l'ID 'my_modal_5' n'a pas été trouvé."
              );
            }
          } catch (error) {
            console.log(error);
          }
        }}
      >
        Créer une nouvelle publication
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Nouvelle publication</h3>
          <div className="py-4 flex flex-col gap-5">
            <div className="p-5 border border-primary border-spacing-3 border-dashed bg-primary bg-opacity-15 flex items-center justify-center rounded-box">
              <div className="text-center cursor-pointer">
                <FcPicture size={"3rem"} className="m-auto" />
                <span>Ajouter une image de couverture</span>
              </div>
            </div>
            <input
              type="text"
              placeholder="Titre du poste"
              className="input input-bordered w-full "
            />
            <textarea
              placeholder="Description..."
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <div className="flex gap-5">
                <button className="btn btn-success text-white">Publier</button>
                <button className="btn">Fermer</button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default PubModal;
