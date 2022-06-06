const express = require('express');
const router = express.Router();

router.get('/', async(req, res)=>{

    try{
        res.send(`
            <h1>Hello Mom!</h1>
            <h2>I'm a backend nodeJS developer now!</h2>
        `)
    }catch(err){
        console.log(err)
        return res.status(500).send("server error")
    }

})

module.exports = router;