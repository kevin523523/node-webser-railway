require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT
var hbs = require('hbs');
//Handlebar
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname+'/views/partials');

//Servir contenido estatico
app.use(express.static('public'))


app.get('/', (req, res)=>{ 
    res.render('home',{
        nombre:'Kevin Ibarra',
        titulo:'Curso de Node'
    });
})

app.get('/elements', (req, res)=>{ 
    res.render('home',{
        nombre:'Kevin Ibarra',
        titulo:'Curso de Node'
    });
})

app.get('/generic', (req, res)=>{ 
    res.render('home',{
        nombre:'Kevin Ibarra',
        titulo:'Curso de Node'
    });
})

/*app.get('/generic', (req, res)=>{
    res.sendFile(__dirname+'/public/generic.html')
})

app.get('/elements', (req, res)=>{
    res.sendFile(__dirname+'/public/elements.html')
})
*/
app.get('*',(req,res)=>{
    //res.send('404 | Page not found')
    res.sendFile(__dirname+'/public/404.html');
})


//app.listen(8080)
app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})