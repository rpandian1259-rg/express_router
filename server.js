const express = require("express")
const app = express();
const PORT = 5000;
const productRoutes = require("./routes/productRoutes");

//express Middleware
app.use(express.json());

app.use("/api/products",productRoutes);

// starting  server
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
});
