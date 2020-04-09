const PORT = process.env.PORT || 8000;
const express = require('express');
const app = express();





//ROUTES
app.get('/', (req, res) => {

    //send response
    res.json("Hello World!");
})


app.get('/api', (req, res) => {

    //send response
    res.json({ msg: "Hello World from API!!!"});
})






//START SERVER
app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
});


