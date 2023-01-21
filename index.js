const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/",function(req,res){
    var Weight = Number(req.body.weight);
    var Height = Number(req.body.height);
    var bmi = Weight/Math.pow(Height/100,2);
    var BMI = parseFloat(bmi).toFixed(1);
    res.send("<strong>Your BMI is : </strong>" + BMI + " <strong><em>kg/m^2</em></strong>");
})
app.listen("3000",function(){
    console.log("Server is running on port 3000");
});
