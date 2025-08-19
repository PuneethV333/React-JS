import React from "react";
import Header from "../../others/header";
import TaskListNumber from "../../others/taskListNumber";
import Tasklist from "../tasklist/Tasklist";


const employDashboard = (prop) => {
  return (
    <div className="bg-[#1c1c1c] h-full p-10 ">
      <div >
        <Header data = {prop.data} changeUser = {prop.changeUser} />
      </div>
      <div>
        <TaskListNumber data = {prop.data} changeUser = {prop.changeUser} />
      </div>
      <div>
        <Tasklist data = {prop.data} changeUser = {prop.changeUser} />
      </div>
    </div>
  );
};

export default employDashboard;
