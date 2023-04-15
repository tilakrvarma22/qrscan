//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
 
// var _=require("lodash");
let com=[];
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res)
{
  res.render("home",{string:com});
});

app.get("/post/:postTitle",function(req,res)
{
  const requiredTitle=req.params.postTitle;
  // const lowerTitle=_.lowerCase(requiredTitle);
  com.forEach(function(element)
  {
    elementTitle=element.title;
    if (elementTitle===requiredTitle)
    {
     res.render("post",
     {
      title:element.title,
      content:element.post
    });
    }
  })
});


app.get("/about",function(req,res)
{
  res.render("about");
});


app.get("/contact",function(req,res)
{
  res.render("contact");
});

app.post("/contact",function(req,res)
{
 console.log("Data has been send.!");
});


app.get("/compose",function(req,res)
{
  res.render("compose");
});

app.post("/compose",function(req,res)
{
  const compose={
    title:req.body.title,
    post:req.body.post
  };

  com.push(compose);
  res.redirect("/");
});












app.listen(3000, function() {
  console.log("Server started on port 3000");
});
