import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, refetch }) => {
  const { name, speciality, img, email } = doctor;

  const handleDelete = (email) => {
    fetch(`http://localhost:4000/doctor/${email}`, {
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
        } else {
          toast.error(`Failed to delete doctor ${name}`);
        }
      });
  };

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
        <button
          className="btn btn-xs block mx-auto hover:btn-error"
          onClick={() => handleDelete(email)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default DoctorRow;
