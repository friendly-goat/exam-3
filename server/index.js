const express = require("express");
const cors = require("cors");
const users = require('./db.json')
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];
  res.status(200).send(randomCompliment);
});
app.get("/api/fortune", (req, res) => {
  const compliments = ["A beautiful, smart, and loving person will be coming into your life.",
					 "A dubious friend may be an enemy in camouflage.",
					 "A faithful friend is a strong defense.",
  ];
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomFortune = compliments[randomIndex];
  res.status(200).send(randomFortune);
});
let myUsers = {
  usr1:"Alex",
  usr2:"Bob",
  usr3:"Mike",
  usr4:"Elena",
  usr5:"Andrei"}
// let myUsers = ["alex","bob","mike","elena","andrei"]
app.get("/api/users", (req,res) => {
  res.status(200).send(myUsers)
})
app.put(`/api/users/:usr3`, (req,res) => {
  req.body.usr3 = 'Bill'
  myUsers.usr3 = req.body.usr3
  res.status(200).send(myUsers)
})
app.delete(`/api/users/:usr1/` , (req,res) => {
  let existingUsername  = req.params.usr1
  myUsers.usr1 = delete existingUsername
  res.status(200).send(myUsers)
})
app.post(`/api/users/` , (req,res) => {
  let newName = 'Joe'
  
  res.status(200).send(myUsers)
})


app.listen(4000, () => console.log("Server running on 4000"));
