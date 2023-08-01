const express = require("express");
const cors= require("cors");
const app= express();

const PORT=4000;

app.use(cors());

const moviesRouter = require('./routes/moviesRouter');
app.use('/api/movies', moviesRouter); 


// const searchRoute = require("./routes/searchRoute");
// app.use("/search", searchRoute);

const searchRoute = require("./routes/searchRoute");
app.use("/search", searchRoute);

app.listen(PORT,()=>{
    console.log("LISTNENING")
})