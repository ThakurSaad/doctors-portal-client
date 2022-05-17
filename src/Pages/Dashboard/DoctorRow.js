import React from "react";

const DoctorRow = ({ doctor, index }) => {
  const { name, speciality, img } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-8 rounded">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{speciality}</td>
      <td>
        <button className="btn btn-xs block mx-auto hover:btn-error">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
