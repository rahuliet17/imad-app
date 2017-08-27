/*var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = {
    user: 'rockerahul97',
    database: 'rockerahul97',
    host: 'http://db.imad.hasura-app.io',
    port: '80',
    password: process.env.DB_PASSWORD
};

app = express();
app.use(morgan('combined'));

var articles = {
   'article-one': {
        title:'Article One | Rahul',
        heading: 'Article One',
        date: 'Aug 18, 2017',
        content:`<p>
                         Hello! Rahul, your content of first article is served  here.
                     </p>
                     <p>
                         Hello! Rahul, your content of first article is served here.
                     </p>
                     <p>
                         Hello! Rahul, your content of first article is served here.
                     </p>`
    },
    'article-two': {
        title:'Article Two | Rahul',
        heading: 'Article Two',
        date: 'Aug 18, 2017',
        content:`            <p>
                     Hello! Rahul, your content of second article is served here.
                 </p>
                 <p>
                     Hello! Rahul, your content of second article is served here.
                 </p>
                 <p>
                     Hello! Rahul, your content of second article is served here.
                 </p>`
    },
    'article-three': {
        title:'Article Three | Rahul',
        heading: 'Article Three ',
        date: 'Aug 18, 2017',
        content:`    <p>
                     Hello! Rahul, your content of three article is served here.
                 </p>
                 <p>
                     Hello! Rahul, your content of three article is served here.
                 </p>
                 <p>
                     Hello! Rahul, your content of three article is served here.
                 </p>`
    }
};

function createTemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate =  `
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                 <div>
                     ${date}
                 </div>
                 <div>
                    ${content}
                 </div>
             </div>
        </body>
    </html>
    `; 
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/testdb',function(req,res){
   //Make a select request
   //Return a response with the results
   pool.query('SELECT * FROM test', (req,res) => {
      if(err){
          res.status(500).send(err.toString());
      }else {
        res.send(JSON.stringify(result));
      }
   });
});

app.get('/thankyou',function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'thankyou.html'));
});

var counter=0;
app.get('/counter',function(req,res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var names =[];
app.get('/submit-name',function(req,res){
    //Get the name from the request
    var name = req.query.name;//TODO
    
    names.push(name);
    
    res.send(JSON.stringify(names));
});

app.get('/:articleName',function (req,res){
  var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

/*var names =[];
app.get('/submit-name/:name',function(req,res){
    //Get the name from the request
    var name = req.params.name;//TODO
    
    names.push(name);
    
    res.send(JSON.stringify(names));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});*/
Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @rockerahul97
 Sign out
 Watch 0
  Star 0
  Fork 5,970 Viswa-kanth/imad-app
forked from hasura/imad-app
 Code  Pull requests 0  Projects 0  Wiki Insights 
Branch: master Find file Copy pathimad-app/server.js
b28670a  5 hours ago
@Viswa-kanth Viswa-kanth [imad-console] Updates server.js
2 contributors @Viswa-kanth @shahidhk
RawBlameHistory    
149 lines (142 sloc)  4.34 KB
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var config = {
    user: 'viswakanthreddy06',
    database: 'viswakanthreddy06',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};
var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
    title : 'Article one i kanth',
    heading : 'Article one',
    date : 'sep14,2017',
    content : `
    <p>
    This is content of my first article.  This is content of my first article.  This is content of my first article.
      This is content of my first article.  This is content of my first article.
      </p>
      <p>
        This is content of my first article.  This is content of my first article.  This is content of my first article.
          This is content of my first article.  This is content of my first article.
          </p>
          <p>
            This is content of my first article.  This is content of my first article.  This is content of my first article.
              This is content of my first article.  This is content of my first article.
              </p>`
              },
              'article-two' : {
                title : 'Article two i kanth',
                heading : 'Article two',
                date : 'sep11,2017',
                content : 
                `<p>
                This is content of my second article.
                </p>`
              },
              'article-three' : {
                title : 'Article three i kanth',
                heading : 'Article three',
                date : 'sep9,2017',
                content : 
                `<p>
                This is content of my third article.
                </p>`
              }
};

                function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate= `
<html>
<head>
    <title>
        ${title}
    </title>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class = "container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
            <h3>
            ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
         ${content}
        </div>
    </div>
    </body>
    </html>
    `;
    return htmlTemplate;
    }
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
function hash (input,salt) {
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return["pbkdf2","10000",salt,hashed.toString('hex')].join('$');
}
    //how to we create a hash
    
    app.get('/hash/:input', function(req,res) {
        var hashedString = hash(req.params.input, 'this-is-some-random-string');
        res.send(hashedString);
    });
var pool=new Pool(config);
app.get('/test-db', function (req,res) {
    //make a select request
    //return a response with results
pool.query('SELECT * FROM test',function (req,res) {
    if (err){
        res.status(500).send(err.toString());
        } else{
            res.send(JSON.stringify(result));
        }
});
});
var counter = 0;
app.get('/counter',function(req,res) {
    counter = counter + 1;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name/:name',function (req,res){ //URL:/submit-name?name=xxxxx
    //get the name from request
var name = req.query.name;
names.push(name);//concatenate to overall list of names
//json:javascript object notation
res.send(JSON.stringify(names));
});

app.get('/:articleName',function (req,res) {
    var articleName = req.query.articleName;
    res.send(createTemplate(articles[articleName]));
    });
 app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
    app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
    });
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

© 2017 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
