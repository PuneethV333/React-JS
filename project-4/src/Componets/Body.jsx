import React, { useState } from "react";
const Body = ({data,setData}) => {
  const [Input,Ietinput] = useState("")

  const handleForm = (e) => {
    e.preventDefault();
    if (!Input.trim()) return;
    setData((prevData) => [...prevData, Input.trim()]); 
    Ietinput("");
  };

  const handleBtn = (e) => {
    Ietinput(e.target.value);
    
  };
  return (
    <div>
      <div className="flex items-center justify-center p-5">
        <form onSubmit={handleForm}>
          <input
            type="text"
            className="bg-white px-10 w-80 py-4  rounded-l-full outline-none"
            placeholder="Enter Task...."
            value={Input}
            onChange={handleBtn}
          />
          <button className={` bg-sky-300 py-4 px-4 rounded-r-full cursor-pointer hover:bg-sky-200 ${!Input.trim()? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled = {!Input.trim()}
          > 
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default Body;