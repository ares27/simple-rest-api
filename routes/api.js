const express = require('express');
const router = express.Router();

router
.get('/', (req, res) => {
    res.send({
        status: 'Ok', 
        message: "Hello! API Route..."
    });
})
.get('/greet', (req, res) => {

    if(!req.query.name || req.query.name==='' ) 
    res.status(400).send({ 
        message: `error`,
        description: `parameter 'name' is required and cannot be empty or blank.`
    })        
    
    res.send({ 
        status: 'Ok',
        greeting: `Hi ${req.query.name}`  
    });
})


module.exports = router;