// Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const fs = require("fs");
// Sets up the Express App
// =============================================================
const app = express();
//deployable port and local port
const PORT = process.env.PORT || 3000;
// loads all the middleware
app.use(Express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


//HTML routes - notes

app.post("/api/notes", (req,res) => {

    const remote = req.body;
    //add id property to object
    newNote.id = //create Id////
    
})


// Routes
// =============================================================


//API Get route
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)

})

//API POST Route




//API Delete Route




//HTML routes - get all ***