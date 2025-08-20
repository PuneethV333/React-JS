import React, { useContext } from "react";
import Header from "../../others/header";
import AllTask from "../../others/allTask";
import CreateTask from "../../others/CreateTask";

const AdminDashboard = (prop) => {

  return (
    <div className="h-screen w-full bg-gray-900 text-white">
      <div className="p-6">
        <Header changeUser = {prop.changeUser}/>
      </div>
      <CreateTask/>
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
