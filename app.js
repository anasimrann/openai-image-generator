const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const app = express();
const port = process.env.PORT || 5001;


const openAI = require("./routes/openAIroute");


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use("/openapi", openAI);





app.listen(port,()=>{
    console.log(`server is running at PORT ${port}`);
})