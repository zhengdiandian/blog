const express = require('express'),
    path = require('path'),
    app = express(),
    indexRoute =require('./routes'),
    userRoute = require('./routes/users')


    app.set('views', path.join(__dirname, 'views'))
    app.set('view engine', 'ejs')
    app.use('/', indexRoute)
    app.use('/user', userRoute)

    
    app.listen(9527)