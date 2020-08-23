var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.locals.pretty = true;

// jade와 express의 연결
// programmable한 특징을 보유하고 있다
// jade를 사용하는 express에서 변수 넣어줘야 사용 가능

app.set('view engine', 'jade');
// 기본 값 : views
app.set('views', './views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/form', function(req,res){
    res.render('form');
});

app.get('/form_receiver', function(req,res){
    var title = req.query.title;
    var description = req.query.description;
    // 적당한 url 자동 생성 후 서버로 보내줌
    res.send(title+', '+description);
});

app.post('/form_receiver', function(req,res){
    var title = req.body.title;
    var description = req.body.description;
    res.send(title+', '+description);
});

app.get('/topic/:id', function(req,res){
    var topics = [
        'Javascript is ...',
        'Nodejs is ...',
        'Express is ...'
    ];

    var output = `
        <a href="/topic/0">Javascript</a></br>
        <a href="/topic/1">Node.js</a></br>
        <a href="/topic/2">Express</a></br>
        ${topics[req.params.id]}
    `
    res.send(output);
});

app.get('/topic/:id/:mode', function(req,res){
    res.send(req.params.id+', '+req.params.mode);
});

app.get('/template', function(req, res){
    // 객체가 render에서 의해서 흘러들어감 temp가 가리키고 있는 내부적 변수 사용가능
    res.render('temp', {time : Date(), _title : 'Jade'});
});
 
app.get('/', function(req,res){
    res.send('Hello Home Page');
});

app.get('/dynamic', function(req, res){
    var lis = '';
    for(var i=0; i<5; i++){
        lis = lis + '<li>상품목록</li>';
    }
    var time = Date();
    var output = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        Hello, Static!
        ${lis}
        ${time}
    </body>
    </html>`;
    res.send(output);
});

app.get('/route', function(req,res){
    res.send('Hello Router , <img src="/route.png"/>');
});

app.listen(3000, function(){
    console.log('Connected 3000 port');
});