const express = require('express')
const router = express.Router()

// define the home route
router.get('/', (req, res) => {
  res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router

// const data = [
//   { email: "vikas@gmail.com", password: "vikas123" },
//   { email: "ragul@gmail.com", password: "ragul123" },
//   { email: "rohit@gmail.com", password: "rohit123" }, 
// ];

