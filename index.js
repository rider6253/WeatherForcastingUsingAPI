// !!! created self server using expressjs to run files in Project folder !!!

const fs=require('fs');
const express=require('express');
const path=require('path');
const app = express();
const staticpath=path.join(__dirname,"./");
app.use(express.static(staticpath));

app.get("",(req,res)=>{
    res.render('index.html');
});


app.listen(1111,()=>{
    console.log("listening to the port 1111");
});

