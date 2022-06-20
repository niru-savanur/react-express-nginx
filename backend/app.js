const express = require('express');
app = express();
cors = require('cors');
app.use(cors());

app.listen(5000, ()=> ("backend running on 5000"));

app.get("/",(req, res)=>{
    res.send("Home Page")
});

app.get("/p1",(req, res)=>{
    res.send("Page 1")
});

app.get("/p2",(req, res)=>{
    res.send("Page 2")
});