// dotenv
require("dotenv").config();
const port = process.env.PORT;

// express
const express = require("express");
const app = express();

// mongoose
const connectDB = require("./config/db");
const Product = require("./models/productModel");

connectDB();

////////////////////////////////////////////

app.use(express.json());

// GET all products
app.get("/api/products", async (req, res) => {
  try {
    const Products = await Product.find({});
    res.json(Products);
  } catch (error) {
    res.status(500).send(error);
  }
});

//GET single product
app.get("/api/products/:id", async (req, res) => {
  const params = req.params.id;
  try {
    const searchProduct = await Product.findById(params);
    if (searchProduct) {
      res.json(searchProduct);
    } else {
      res.status(404).send("couldn't find the product");
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

//PORT new product
app.post("/api/product", async (req, res) => {
  const newProduct = req.body;
  try {
    await Product.create(newProduct);
    res.status(201).send("berhasil menambahkan product");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//PATCH updating product
app.patch("/api/product/:id", async (req, res) => {
  const params = req.params.id;
  const updatedProduct = req.body;

  try {
    await Product.findByIdAndUpdate(params, updatedProduct);
    res.send("Product updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//DELETE product
app.delete("/api/product/:id", async (req, res) => {
  const params = req.params.id;
  try {
    await Product.findByIdAndDelete(params);
    res.status(201).send("succeed deleting product");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});