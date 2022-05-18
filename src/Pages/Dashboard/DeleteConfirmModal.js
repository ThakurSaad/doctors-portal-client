import React from "react";
import { toast } from "react-toastify";

const DeleteConfirmModal = ({ deletingDoctor, refetch, setDeletingDoctor }) => {
  const { name, email } = deletingDoctor;

  const handleDelete = () => {
    fetch(`https://dry-hollows-93742.herokuapp.com/doctor/${email}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
          toast.success(`Doctor ${name} is deleted`);
          setDeletingDoctor(null);
        } else {
          toast.error(`Failed to delete doctor ${name}`);
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-red-500">
            Are you sure you want to delete Doctor {name} ?
          </h3>
          <p className="py-4">
            Once deleted the doctors data will be erased from the Doctors Portal
            database
          </p>
          <div className="modal-action">
            <button className="btn btn-error" onClick={() => handleDelete()}>
              Delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
