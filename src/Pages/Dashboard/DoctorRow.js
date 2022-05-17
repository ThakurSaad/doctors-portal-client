import React from "react";

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
  const { name, speciality, img } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-8 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{speciality}</td>
      <td>
        <label
          htmlFor="delete-confirm-modal"
          className="btn modal-button btn-xs hover:btn-error"
          onClick={() => setDeletingDoctor(doctor)}
        >
          delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
