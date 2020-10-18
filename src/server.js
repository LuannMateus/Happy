const express = require('express');
const server = express();
const path = require('path')
const pages = require('./pages')


server
    // utilizar body do req
    .use(express.urlencoded({ extended: true }))

    // static files
    .use(express.static('public'))

    // template engine  
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    .get('/', pages.index)

    .get('/orphanages', pages.orphanages)

    .get('/orphanage', pages.orphanage)
    
    .get('/create-orphanage', pages.createOrphanage)

    .post('/save-orphanage', pages.saveOrphanage)

server.listen(8080, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Server Online...')
    }
});