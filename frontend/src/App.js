import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
function App() {
  const [data, setData] = useState("Fetching");
  useEffect(()=>{
    axios.get(process.env.API+"/").then(res=>setData(res.data));
  },[]);

  return (
    <div>
      <h1>{data}</h1>
      <Link to="/p1"><button>Page1</button></Link>
        <Link to="/p1"><button>Page2</button></Link>
    </div>
  );
}

export default App;
