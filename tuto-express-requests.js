//Handling HTTP Requests with Express JS
//https://www.youtube.com/watch?v=IGFdJxkJRC0

// do: npm init and then: npm i express --save
//then run: node nameofthefile.js

"use strict";
const express = require("express");
const app = express();

//const http = require('http');
//console.log(http.METHODS); //shows all methods used such as: ACL, BIND, COPY, CHECKOUT, DELETE, PUT, SEARCH,REBIND, SUBSCRIBE, UNLINK, ETC.
//console.log(http.STATUS_CODES);//instead seeing online, you can see the status codes here.

app.get("/", (req, res) => {
  console.log(req.headers);
  console.log(req.url);
  console.log(req.ip);//IP address
  console.log(req.hostname);
  console.log(req.method); //get
  console.log(req.protocol); //http /https
  console.log(req.path); // just the path part of the url
  console.log(req.subdomains); //  test.sales.example.com ['test','sales]

  console.log(req.query); // querystring
  console.log(req.params); // /user/72  /product/234234
  // app.get("/user/:id")  app.get("/product/:id")
  // req.params.id  VERY USEFUL
  res.status(404).end();
});

//app.post("/thing");

app.listen(3000, err => {
  if (err) {
    console.log("there was a problem", err);
    return;
  }
  console.log("listening on port 3000");
});