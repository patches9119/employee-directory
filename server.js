const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const employeesRouter = require('./routes/api.js');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/employees', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
  
    });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  


// routes
app.use(require("./routes/api.js"));




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});