const express = require('express')
const { route } = require('./routes/routes')
const app = express()
const port = 3000

// app.use("api/v1", router); // Middleware to parse JSON request body


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

app.post('/login', (req, res) => {
    const login = req.body.login;
    const password = req.body.password;
    console.log(login);
});
