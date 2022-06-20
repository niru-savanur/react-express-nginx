import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
function Page2() {
    const [data, setData] = useState("Fetching");
    useEffect(()=>{
        axios.get(process.env.API+"/p2").then(res=>setData(res.data));
      },[]);
    return (
        <div>
        <h1>{data}</h1>
        <Link to="/"><button>Home</button></Link>
        <Link to="/p1"><button>Page1</button></Link>
        </div>
    );
}

export default Page2;
