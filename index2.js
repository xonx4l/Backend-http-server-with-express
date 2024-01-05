const express = require("express");
const app = express();

const users = [{
      name: "john",
      kidneys: [{
          healthy: false
  }]
}];

app.use(express.json());

app.get("/", function (req,res){
    const johnKidneys = users[0].kidneys;
    const numberofKidneys = johnkidneys.length;
    let numberofHealthyKidneys = 0;
    for (let i=0; i<johnKidneys.length; i++){
       if (johnKidney[i].healthy){
          numberofHealthyKidneys = numberofHealthyKidneys + 1;
    }
  }
  const numberofUnhealthyKidneys = numberofKidneys - numberofHealthykidneys;
  res.json({
      numberofKidneys,
      numberofHealthyKidneys,
      numberofUnhealthyKidneys

  })
})

app.post("/", function(req,res){
    console.log(req.body); // undefined 
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
  })
  res.json({
      msg:"Done!"
  })
})

app.put("/", function(req,res){
    for(let i=0; i<users[0].kidneys.length; i++){
       users[0].kidneys[i].healthy = true;
  }
  res.json({});
})

//removing all the unhealthy kidneys 

app.delete("/", function(req,res){
  if (isThereAtleastOneUnhealthyKidney()){
    const newKidneys = [];
    for (let i=0; i<users[0].kidneys.length; i++){
      if (users[0].kidneys[i].helathy){
          newKidneys.push({
              healthy: true
      })
    }
  }
  users[0].kidneys = newKidneys;
  res.json({msg: "done!"})
  } else {
     res.status(411).json({
      msg:"you have no bad kidneys"
    });
  }
})

function isThereAtleastOneUnhealthyKidney() {
  let isThereAtleastOneUnhealthyKidney = false;
   for(let i =0; i<users[0].kidneys.length; i++){
    if (!users[0].kidneys[i].healthy){
       atleastOneUnhealthyKidney = true;
    }
  }
  return atleastOneUnhealthyKidney
}

app.listen(3000);

