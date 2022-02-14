'use strict';

const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // 200 status code means OK
    res.status().send(200);
})

var http = require('http');

// Create a server object
http.createServer(function(req, res) {

    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url = req.url;

    if (url === '/database.json') {
        console.log("reading again");
        const jsonData = require('./database.json');
        console.log(jsonData);
        res.write(' data loaded');
        res.end();

    } else if (url === '/about') {
        console.log("welcome to ignite ");
        res.write(' Welcome to IGNITE');
        res.end();
    } else {
        res.writeHead(200);
        res.write(' OK');
        res.end();

    }
}).listen(8081, function() {

    // The server object listens on port 3000
    console.log("server start at port 8081");
});

/*
let rawdata = fs.readFileSync('database.json');
let mechanic = JSON.parse(rawdata);
console.log(mechanic); 
*/

let mechanic = {
    "mechanic": [
        { "status": "0", "exp": 17, "doj": "july 21 1990", "name": "Sunil", "price": 350000.00, "location": "Periyar", "type": "engine", "contact": "9900808675" },
        { "status": "1", "exp": 16, "doj": "october 24,2021", "name": "Ramuk", "price": 500000.00, "location": "Kalavasal", "type": "look and feel", "contact": "9486693427" },
        { "status": "1", "exp": 11, "doj": "july 23 ,1990", "name": "Abishek", "price": 1500000.00, "location": "Thiruparankundram", "type": "automation", "contact": "8883712624" },
        { "status": "1", "exp": 15, "doj": "july 21 ,1990", "name": "Sunil Kumar", "price": 360000.00, "location": "Andalpuram", "type": "ALL", "contact": "9082645654" },
        { "status": "1", "exp": 3, "doj": "july 21 ,1990", "name": "Prasanna", "price": 400000.00, "location": "Madurai", "type": "designer", "contact": "9900808574" },
        { "status": "0", "exp": 17, "doj": "january 21 ,1990", "name": "Pavan", "price": 350000.00, "location": "Periyar", "type": "engine", "contact": "9443083277" },
        { "status": "1", "exp": 16, "doj": "march 21 ,1990", "name": "Steve", "price": 500000.00, "location": "Kalavasal", "type": "look and feel", "contact": "9486693427" },
        { "status": "1", "exp": 11, "doj": "april 21 ,1990", "name": "Sandeep", "price": 1500000.00, "location": "Thiruparankundram", "type": "automation", "contact": "9047887913" },
        { "status": "1", "exp": 15, "doj": "july 21 ,1990", "name": "Madhu", "price": 360000.00, "location": "Andalpuram", "type": "ALL", "contact": "8765676453" },
        { "status": "1", "exp": 3, "doj": "september 21 ,1990", "name": "Varsha", "price": 400000.00, "location": "Madurai", "type": "designer", "contact": "6677558899" },
        { "status": "0", "exp": 17, "doj": "july 21 ,1990", "name": "Priyasha", "price": 350000.00, "location": "Periyar", "type": "engine", "contact": "87656474647" },
        { "status": "1", "exp": 16, "doj": "july 21 ,1990", "name": "Mounika", "price": 500000.00, "location": "Kalavasal", "type": "look and feel", "contact": "9486693427" },
        { "status": "1", "exp": 11, "doj": "july 21 ,1990", "name": "Sindu", "price": 100000.00, "location": "Thiruparankundram", "type": "automation", "contact": "9047887913" },
        { "status": "1", "exp": 15, "doj": "july 21 ,1990", "name": "Harika", "price": 360000.00, "location": "Andalpuram", "type": "ALL", "contact": "88776554433" },
        { "status": "1", "exp": 3, "doj": "july 21 ,1990", "name": "Gowthami", "price": 400000.00, "location": "Madurai", "type": "designer", "contact": "8241654654" }
    ]

};

let data = JSON.stringify(mechanic);

fs.writeFile('./database.json', data, (err) => {
    console.log('WRITTING...');
    if (err) throw err;
    console.log('Data written to file');
});



fs.readFile('./database.json', (err, data) => {
    console.log('READING...');
    if (err) throw err;
    let mechanic = JSON.parse(data);
    console.log(mechanic);

});