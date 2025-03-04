
const express = require('express')
const app = express() 

app.use((req, res, next) => {
    console.log(req.method + " " + req.path)
    next()
  })
  
  app.use(express.static(__dirname + "/public"))
  
  app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
  })
  
  app.listen(3000, (req, res) => {})

  function toggleInfo(id) {
    const infoElement = document.getElementById(id);
    const isHidden = infoElement.classList.contains('hidden');
    document.querySelectorAll('.card-info').forEach(info => info.classList.add('hidden'));
    
    if (isHidden) {
        infoElement.classList.remove('hidden');
    }