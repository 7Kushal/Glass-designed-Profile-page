const express = require("express");
const app = express();

// body-parser request

//request required
app.use(express.static("public"));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});


app.listen(process.env.PORT||3000,function(){
    console.log("Server 3000 is runnig");
  });
