const express = require('express');
const app = express();


app.listen(8080, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Server Online...')
    }
});