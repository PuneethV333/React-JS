import React, { useState } from 'react'
import { IoIosSwitch } from "react-icons/io";

const Button = () => {
    const [cond,SetCond] =  useState("off")
    const handleSwitch = () => {
        cond == "off" ? SetCond("on") : SetCond("off")
    }
  return (
    <div className='flex items-center justify-center w-screen h-screen flex-col ' >
        <h1 className='text-center text-2xl font-black'>Toggle Switch{<IoIosSwitch/>}</h1>
        
        <div
  className={`px-6 py-3 w-70 rounded-full border-2 border-black ${cond === "off" ? "bg-slate-400 " : "bg-green-100"} relative`}
  onClick={handleSwitch}
>
            <div className={` p-10 rounded-full flex items-center justify-center border-4  w-20 h-20 duration-400 ${cond === "off" ? "bg-white translate-x-0 border-red-700" : "bg-green-400 translate-x-35 border-green-700" }`}>
                <span>{cond == "off" ? "off":"on"}</span>
            </div>

        </div>
      
    </div>
  )
}

export default Button
