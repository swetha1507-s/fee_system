const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const FILE="payments.json";

/* Add Payment */
app.post("/addPayment",(req,res)=>{

 let payments = JSON.parse(fs.readFileSync(FILE));

 payments.push(req.body);

 fs.writeFileSync(FILE,JSON.stringify(payments));

 res.send("Payment Added");

});

/* View Dues Details */
app.get("/viewDues",(req,res)=>{

 let payments = JSON.parse(fs.readFileSync(FILE));

 res.json(payments);

});

app.listen(3000,()=>{

 console.log("Version 1 running");

});