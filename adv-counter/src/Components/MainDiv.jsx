import React, { useState } from "react";

const MainDiv = () => {
  const [Step, SetStep] = useState(1);
  const [Count,setCount] = useState(0)
  const handleChange = (e) => {
    SetStep(e.target.value);
  };
  const increment = () => {
    let val = Count+parseInt(Step)
    setCount(val)
  }
  const decrement = () => {
    let val = Count-parseInt(Step)
    setCount(val)
  }
  const reset = () => {
    let val = 0
    setCount(val)
  }
  return (
    <div className="bg-slate-400 flex w-screen h-screen items-center justify-center ">
      <div className="bg-white border-1 border-amber-100 w-3/4 h-1/2 rounded-3xl p-4 ">
        <h1 className="font-black text-6xl text-center ">Adv Counter</h1>
        <p className="mb-5">
          Conut: <span className="text-sky-400 font-bold text-3xl">{Count}</span>
        </p>
        <p className="mb-5">
          Step:{" "}
          <input
            type="number"
            className="border-1 border-black outline-none "
            value={Step}
            min={0}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </p>
        <div className="flex justify-around">
            <button className="px-6 py-3 bg-green-300 rounded-full cursor-pointer hover:bg-green-200" onClick={increment}>Increment</button>
            <button className="px-6 py-3 bg-green-300 rounded-full cursor-pointer hover:bg-green-200" onClick={decrement}>Decrement</button>
            <button className="px-6 py-3 bg-green-300 rounded-full cursor-pointer hover:bg-green-200" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default MainDiv;
