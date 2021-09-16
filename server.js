// Requiring express so that we can have an express backend server
const express = require("express");
// require your noteRoutes
const noteRoutes = require("./routes/noteRoutes.js");
// require your htmlroutes
const htmlRoutes = require("./routes/htmlRoutes.js");


// Creating an express app
const app = express();
// Creating a port, can be any four-digit number not starting with 0
const PORT = process.env.PORT || 5000;

// Lets express app know where static assets are
// Static assets are frontend JS and CSS
app.use(express.static("public"));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

// Connect to routes
// root route
app.use(noteRoutes);
app.use(htmlRoutes);

// Listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
