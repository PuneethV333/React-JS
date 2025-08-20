import React, { useContext, useState } from "react";
import { AutherContext } from "../context/autherProvider";

const CreateTask = () => {
  const { authData, setauthData } = useContext(AutherContext);

  const [TaskTitle, SetTaskTitle] = useState("");
  const [TaskDescription, SetTaskDescription] = useState("");
  const [TaskDate, SetTaskDate] = useState("");
  const [TaskAssignTo, SetTaskAssignTo] = useState("");
  const [TaskCategory, SetTaskCategory] = useState("");

  const data = authData.employees || [];

  const formHandle = (e) => {
    e.preventDefault();

    if (
      !TaskTitle ||
      !TaskDescription ||
      !TaskDate ||
      !TaskAssignTo ||
      !TaskCategory
    ) {
      alert("Please fill all fields before submitting!");
      return;
    }

    const Task = {
      title: TaskTitle,
      description: TaskDescription,
      date: TaskDate,
      category: TaskCategory,
      accepted: false,
      newtask: true,
      completed: false,
      failed: false,
    };

    const updatedEmployees = data.map((emp) => {
      if (TaskAssignTo.toLowerCase() === emp.name.toLowerCase()) {
        return {
          ...emp,
          tasks: [...emp.tasks, Task],
          taskCount: {
            ...emp.taskCount,
            newtask: emp.taskCount.newtask + 1,
          },
          totalTasks: emp.totalTasks + 1,
        };
      }
      return emp;
    });

    setauthData({
      ...authData,
      employees: updatedEmployees,
    });

    SetTaskTitle("");
    SetTaskDescription("");
    SetTaskDate("");
    SetTaskAssignTo("");
    SetTaskCategory("");
  };

  return (
    <div>
      <div className="bg-stone-800 rounded-lg mx-auto max-w-3xl p-10 mb-8">
        <form
          className="flex flex-col justify-center items-center"
          onSubmit={formHandle}
        >
          <div className="w-full mb-4">
            <label
              className="block mb-1 font-semibold text-lg"
              htmlFor="taskTitle"
            >
              Task Title
            </label>
            <input
              value={TaskTitle}
              onChange={(e) => SetTaskTitle(e.target.value)}
              autoComplete="off"
              id="taskTitle"
              type="text"
              placeholder="Make a UI design"
              className="text-xl outline-none rounded-lg w-full bg-slate-700 py-2 px-5 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          <div className="w-full mb-4">
            <label
              className="block mb-1 font-semibold text-lg"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              value={TaskDescription}
              onChange={(e) => SetTaskDescription(e.target.value)}
              name="description"
              id="description"
              placeholder="Detailed description of task [max 500 words]"
              className="text-xl outline-none rounded-lg w-full bg-slate-700 py-2 px-5 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 transition"
              rows="5"
              maxLength={500}
            ></textarea>
          </div>

          <div className="w-full mb-4">
            <label className="block mb-1 font-semibold text-lg" htmlFor="date">
              Date
            </label>
            <input
              value={TaskDate}
              onChange={(e) => SetTaskDate(e.target.value)}
              autoComplete="off"
              id="date"
              type="date"
              className="text-xl outline-none rounded-lg w-full bg-slate-700 py-2 px-5 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          <div className="w-full mb-4">
            <label
              className="block mb-1 font-semibold text-lg"
              htmlFor="assignTo"
            >
              Assign To
            </label>
            <input
              value={TaskAssignTo}
              onChange={(e) => SetTaskAssignTo(e.target.value)}
              list="employeeList"
              autoComplete="off"
              id="assignTo"
              type="text"
              className="text-xl outline-none rounded-lg w-full bg-slate-700 py-2 px-5 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 transition"
            />
            <datalist id="employeeList">
              {data.map((i, idx) => (
                <option value={i.name} key={idx}></option>
              ))}
            </datalist>
          </div>

          <div className="w-full mb-6">
            <label
              className="block mb-1 font-semibold text-lg"
              htmlFor="category"
            >
              Category
            </label>
            <input
              value={TaskCategory}
              onChange={(e) => SetTaskCategory(e.target.value)}
              autoComplete="off"
              id="category"
              type="text"
              placeholder="Design, Development, etc."
              className="text-xl outline-none rounded-lg w-full bg-slate-700 py-2 px-5 placeholder:text-gray-400 focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 py-3 rounded-full font-semibold text-xl hover:bg-emerald-700 transition"
          >
            Create Task
          </button>
        </form>
      </div>

      <div
        className="bg-stone-800 py-3 px-6 mb-4 flex cursor-pointer flex-col sm:flex-row sm:items-center sm:justify-between
        gap-2 rounded-lg shadow-md text-sm sm:text-base mx-auto max-w-3xl font-semibold text-white"
      >
        <h2>Name</h2>
        
        <h2 className="text-emerald-300">Completed</h2>
        <h2 className="text-emerald-300">Accepted</h2>
        <h2 className="text-emerald-300">New Task</h2>
        <h2 className="text-emerald-300">Failed</h2>
      </div>
    </div>
  );
};

export default CreateTask;
