import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdOutlineDeleteForever } from 'react-icons/md';

const TaskCard = ({ details,setdetails,data }) => {
    const [click,setClick] = useState("no")
    const deleteElem = (value) => {
        const uptatedDetails = data.filter((i) => i !== value );
        setdetails(uptatedDetails)
    }
    const checkElem = () => {
        setClick("yes")
    }
  return (
    <div >
        <div className="flex items-center justify-between h-1 p-6    bg-white rounded-xl shadow-md mb-4 ">
      <div className="flex-grow pl-6 text-gray-800 font-medium">{click=="no"?details:<s>{details}</s>}</div>
      <div className="flex space-x-4">
        <button     >
            <FaCheckCircle className="text-green-500 cursor-pointer w-6 h-6 hover:text-green-700 transition" onClick={checkElem}/>
        </button>
        <button>
            <MdOutlineDeleteForever className="text-red-500 cursor-pointer w-6 h-6 hover:text-red-700 transition" onClick={() => deleteElem(details)}/>
        </button>
      </div>
    </div>
    </div>
  );
};

export default TaskCard;
