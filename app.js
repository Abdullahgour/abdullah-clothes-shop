const express = require("express")
const path = require("path")

const app = express()

app.set("view engine", "ejs")
app.use(express.static("public"))

const products = [
  {
    id:1,
    name:"Classic T-Shirt",
    price:500,
    image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    id:2,
    name:"Blue Jeans",
    price:1200,
    image:"https://images.unsplash.com/photo-1542272604-787c3835536d"
  },
  {
    id:3,
    name:"Winter Jacket",
    price:2500,
    image:"https://images.unsplash.com/photo-1520975922284-4b6a4b1c45c4"
  }
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
