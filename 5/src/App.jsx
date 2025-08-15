import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./components/Card";


const App = () => {
  const [data,setData] = useState([]) 
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    setData(response.data)
    console.log(response.data)
  }

  // automaticly runs collects data
  useEffect(() => {
    getData()
  },[])
  return (
    <div className="p-10">
      {/* <button className="bg-teal-700 text-white font-semibold text-2xl px-6 py-3 rounded active:scale-90" onClick={getData}>
        get data
      </button> */}
      <div className="bg-gray-950 p-5">
        {data.map(function(elem,idx){
            return <Card image = {elem.download_url} key={idx} name = {elem.author}/>
        })}
      </div>
    </div>
  );
};

export default App;
