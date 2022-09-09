const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config()


const app = express();

app.use([morgan('dev'), cors()])

app.get('/health', (req, res) =>{
    res.json({message: "Health route is working fine!"})
})

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`The server is listening on port ${port}`);
})