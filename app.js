const express = require("express"); //nie korzystam już z http!!
const port = process.env.PORT || 3000;
const app = express();
const path = require('path')
const fromAnotherFile = require("./functions");
const sample = () => {
    return 'proba'
};


app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use('/js', express.static(path.join(__dirname, "./js")));
app.set("view engine", 'hbs')
//gdy uzytkownik wchodzi na stronę 
app.get('/', function (req, res) {
    res.render('index', {
        pageTitle: 'dzisiejsza lekcja',
        subTitle: fromAnotherFile.someTitle,
        anotherTitle: sample()
    })
}) 
//jesli jestesmy na podstronie to wpisujemy app.get('/about')
app.get('/about', function (req, res){
    res.send("O mnie")
})


app.listen(port, (err) => {
    if(err){return console.log('coś poszło nie tak..:', err);}
    console.log(`serwer działa na porcie ${port}`);
})