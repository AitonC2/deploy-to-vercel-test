const express = require('express');
const router = express.Router();
const data =  require('./dictionary.json')

router.get('/', async(req, res)=>{

    try{
        res.json(data);
    }catch(err){
        console.log(err)
        return res.status(500).send("server error")
    }

})

module.exports = router;