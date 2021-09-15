// Requiring express so that we can have an express backend server
const express = require("express");
// require your apiRoutes
const apiRoutes = require("./routes/apiRoutes.js");
// require your htmlroutes
const htmlRoutes = require("./routes/htmlRoutes.js");
// Helper method for generating unique ids
const uuid = require('./helpers/uuid.js');

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

// Connect to routes

// root route
app.use(apiRoutes);
app.use(htmlRoutes);

 
// // POST request to add a review
// app.post('/api/reviews', (req, res) => {
// // Log that a POST request was received
// console.info(`${req.method} request received to add a review`);

// // Destructuring assignment for the items in req.body
// const { product, review, username } = req.body;

//   // If all the required properties are present
//   if (product && review && username) {
//     // Variable for the object we will save
//     const newReview = {
//       product,
//       review,
//       username,
//       upvotes: Math.floor(Math.random() * 100),
//       review_id: uuid(),
//     };

//     // Convert the data to a string so we can save it
//     const reviewString = JSON.stringify(newReview);

//     // Write the string to a file
//     fs.writeFile(`./db/${newReview.product}.json`, reviewString, (err) =>
//       err
//         ? console.error(err)
//         : console.log(
//             `Review for ${newReview.product} has been written to JSON file`
//           )
//     );

//     const response = {
//       status: 'success',
//       body: newReview,
//     };

//     console.log(response);
//     res.status(201).json(response);
//   } else {
//     res.status(500).json('Error in posting review');
//   }
// });


// Listener
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
