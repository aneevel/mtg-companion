const express = require('express');

const app = express();

let port = 3000;

// Override in production
if (process.env.API_PORT) 
    port = process.env.API_PORT;


app.listen(port, () => {
    console.log(`MTG Companion API listening on port ${port}`);
});