console.log("Hello World");

//import '';
const express = require('express')


const PORT = 3000;

const app = express();





//CREATING API.


//IP address..
app.listen(PORT,"0.0.0.0",()=>{
    console.log(`connected at port ${PORT}`);
});

