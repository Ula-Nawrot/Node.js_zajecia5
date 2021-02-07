const express = require("express"); //nie korzystam już z http!!
const port = 3000;
const app = express();

app.set("view engine", 'hbs')
//gdy uzytkownik wchodzi na stronę 
app.get('/', function (req, res) {
    res.render('index')
}) 
//jesli jestesmy na podstronie to wpisujemy app.get('/about')
app.get('/about', function (req, res){
    res.send("O mnie")
})


app.listen(port, (err) => {
    if(err){return console.log('coś poszło nie tak..:', err);}
    console.log(`serwer działa na porcie ${port}`);
})