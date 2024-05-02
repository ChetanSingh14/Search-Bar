import React, { useState } from 'react';
export default function App() {
  let arr = [
    "search",
    "keywords",
    "with",
    "the",
    "help",
    "of",
    "bar",
    "searc"
  ];
  const [data, setData] = useState("");
  const [updata, setupData] = useState([]);
  function handleChange(e) {
    e.preventDefault();
    setData(e.target.value);
    setupData(arr.filter(ele => (ele.toLowerCase()).includes(data.toLowerCase())));
  }

  return (
    <div>
      <form>
        <input type='text' onChange={handleChange} placeholder='Search here' />
      </form>
      {/* {data.trim() === "" || data === undefined ||data.length===0? <ul>
        {/* {arr.map((ele, index) => (
          <li key={index}>{ele}</li>
        ))} */}
      {/* </ul> : */}
        <ul>
          {updata.map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
        </ul>

    </div>
  );
}

