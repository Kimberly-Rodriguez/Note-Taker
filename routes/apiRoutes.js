const router = require("express").Router();

router.get("/api", (req, res) => {
  console.log(req.query); // req.query is anything that comes after a question mark

res.json(" ")
});

router.post("/api", (req, res) => {
  res.json({
    term: 'router',
    description:
    'hey there'
  })

});



module.exports = router;