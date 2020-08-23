var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');
// dest = destination 어디에 최종적으로 저장될지 지정
var upload = multer({ storage : 'uploads/' });

app.locals.pretty = true;
app.use(bodyParser.urlencoded({extended:false}));

app.set('views', './views_file');
app.set('view engine', 'jade');

app.get('/upload', function(req,res){
    res.render('upload');
});

// 두 번째 인자 미들웨어 => function 실행 전 실행, 사용자가 전송한 데이터에서 파일 포함, 파일을 가공해서 request 객체의 파일 프로퍼티 암시적 추가
// Middleware
app.post('/upload', upload.single('userfile'), function(req,res){
    console.log(req.file);
    res.send('Uploaded : ' + req.file.filename);
});

app.get('/topic/new', function(req,res){
    fs.readdir('data', function(err, files){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.render('new', {topics:files});
    })
});

app.get(['/topic', '/topic/:id'], function(req,res){
    fs.readdir('data', function(err, files){
        if(err){
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        var id = req.params.id;
        if(id){
            // id 값이 있을 때 실행
            fs.readFile('data/'+id, 'utf8' , function(err, data){
                if(err){
                    console.log(err);
                    res.status(500).send('Internal Server Error');
                }
                res.render('view', {title:id, topics:files, description:data});
            });
        }else{
            // id 값이 없을 때 실행
            res.render('view', {topics : files, title : 'Welcome', description : 'Hello Javascript for Server'});
        }
    });
});

app.post('/topic', function(req,res){
    var title = req.body.title;
    var description = req.body.description;
    fs.writeFile('data/'+title, description, function(err){
        if(err){
            // err는 error 정보를 담고 있음, 해킹의 빌미가 되기 때문에 에러 정보를 불특정 다수에게 전달하지 않음
            console.log(err);
            res.status(500).send('Internal Server Error');
        }
        res.redirect('/topic/'+title);
    });
});

app.listen(3000, function(){
    console.log('Connected, 3000 port!');
});