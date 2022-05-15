import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:4000/user").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="mx-8 mb-8">
      <h3 className="text-accent text-4xl uppercase ml-8">
        All Users : {users.length}
      </h3>
      <div className="overflow-x-auto  mt-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow key={user._id} user={user} index={index}></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
