// Dependencies
// =============================================================
const express = require("express");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(Express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));




// Routes
// =============================================================


//API Get route
app.listen(PORT, () => {
    console.log(`Listenong on port: ${PORT}`)
    
})

//API POST Route




//API Delete ROute