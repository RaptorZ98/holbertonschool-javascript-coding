#!/usr/bin/node

const req = require('fs');
const filePath = process.argv[0];
req.readFile(filePath, 'utf-8', function(error, response){
    if(err){
        console.log(error)
    }else{
        console.log(response)
    }
});
