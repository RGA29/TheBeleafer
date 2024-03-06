const path = require('path'); 
const express = require('express');

const apiRouter = require('./routes/api')

const app = express(); 

const PORT = 3000; 


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


app.use(express.static(path.resolve(__dirname, '../src')));

// define route handler
app.use('/api', apiRouter); 

app.use('*', (req, res) => res.status(400).send('This page is not found'))

app.use((err, req, res, next)=>{
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error', 
        status: 500, 
        message: {err: 'An error occurred'},
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log); 
    return res.status(errorObj.status).json(errorObj.message);  
});



app.listen(PORT, ()=> {
    console.log(`server listening on port ${PORT}`); 
})

module.exports = app; 

