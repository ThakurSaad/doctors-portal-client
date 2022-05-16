import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);

  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h3 className="font-bold text-secondary text-4xl uppercase my-4 ml-8">
          Dashboard
        </h3>
        {/* <!-- Page content here --> */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul
          tabIndex="1"
          className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content"
        >
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">Appointments</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Review</Link>
          </li>
          <li>
            <Link to="/dashboard/history">History</Link>
          </li>
          {admin && (
            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
