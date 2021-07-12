const PORT = process.env.PORT || 3099;
const express = require('express');
const app = express();

app.use(express.json());


app
.get('/api', (req, res) => {
    res.send({
        status: 'Ok', 
        message: "Hello! API online..."
    });
})
.get('/greet', (req, res) => {

    if(!req.query.name || req.query.name==='' ) {
        res.status(400).send({ 
            message: `error`,
            description: `parameter 'name' is required and cannot be empty or blank.`
        })        
    }
    
    res.send({ 
        status: 'Ok',
        greeting: `Hi ${req.query.name}`  
    });
})






app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
});


