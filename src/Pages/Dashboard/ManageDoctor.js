import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageDoctor = () => {
  const { data: doctors, isLoading } = useQuery("doctors", () =>
    fetch("http://localhost:4000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h3 className="text-accent text-4xl uppercase ml-8">
        Manage Doctor : {doctors.length}
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Speciality</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
        </div>
      </h3>
    </div>
  );
};

export default ManageDoctor;
