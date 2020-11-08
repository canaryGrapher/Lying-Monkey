//importing all dependencies
const express = require('express');
const cors = require("cors");

// check for environment offered port, or switch to default of 3000
const PORT = process.env.PORT || 3000;
const app = express();

//enabling Cross-Origin Resource Sharing 
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//route to send news from the database
app.use("/news", require("./routes/news"));

//route to check if the query text is fake or not
app.use("/detection", require("./routes/detection"));

//handle rogue routes
app.get("*", (req, res) => {
      res.status(404).json({msg: "This route is not defined"})
})

//listen to the requests on port ${PORT}
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});