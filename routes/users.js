const express = require('express'),
    router = express.Router();

router.get('/:name',(req, res) => {
    // res.send(`hello ${req.params.name}`)
    res.render('users', {
        name: req.params.name
    })
})
module.exports = router
