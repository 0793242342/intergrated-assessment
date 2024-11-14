const express=require('express');
const app= express();
const port=3000;
app.post(`/`,(req,res)=>{
res.status(200).json({message:"sever is running at port"});
});
app.get(`/`,(req,res)=>{
res.status(200).json({message:"create port"});
});
    app.listen(sever,()=>{
       
});
console.log(`saver is running on port local host:${sever}`);

