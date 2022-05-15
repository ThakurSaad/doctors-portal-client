import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Users = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:4000/user").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section>
      <h3 className="text-accent text-4xl uppercase ml-8">
        All Users : {users.length}
      </h3>
    </section>
  );
};

export default Users;
