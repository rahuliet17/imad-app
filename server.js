var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
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
});*/

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
});
