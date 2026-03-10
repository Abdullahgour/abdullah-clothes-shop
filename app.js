const express = require("express")
const path = require("path")

const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

const products = [
  { id: 1, name: "T-Shirt", price: 500, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Jeans", price: 1200, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Jacket", price: 2500, image: "https://via.placeholder.com/200" }
]

app.get("/", (req,res)=>{
  res.render("index",{products})
})

app.get("/product/:id",(req,res)=>{
  const product = products.find(p=>p.id==req.params.id)
  res.render("product",{product})
})

app.get("/health",(req,res)=>{
  res.send("Server is running")
})

app.listen(3000,"0.0.0.0",()=>{
  console.log("Abdullah Clothes Shop running on port 3000")
})
