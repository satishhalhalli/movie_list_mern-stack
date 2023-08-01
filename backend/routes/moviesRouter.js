const express = require("express");

const axios= require("axios");
const router = express.Router();

const API_KEY = "4b9eb327c39a77e372746d87d6deb4b5";
const TMBD_BASE_URL = "http://api.themoviedb.org/3";


router.get("/", async(req, res) => {
    try {
        const response = await axios.get(`${TMBD_BASE_URL}/discover/movie`, {
          params: {
     api_key: API_KEY,
          },
        });
    
 const movies = response.data.results;
        res.json(movies);
    }
    catch(err){
        console.error("Error fetching movies:", err); 
        res.status(500).json({ message: "Error fetching movies" });
    }
});

module.exports = router;