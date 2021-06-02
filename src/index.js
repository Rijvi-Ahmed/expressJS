const express = require('express')
const app = express()//need this frunction for express application
const path = require('path');
const hbs = require('hbs');
//const exphbs = require('express-handlebars');

//we can configure express-handlebars as our view engine
// app.engine('hbs', exphbs({
//     defaultLayout: 'main',
//     extname: '.hbs'
// }));



//to set view engine
app.set('view engine', 'hbs')

//change views name to template
const templatepath = path.join(__dirname,"../templates/views")
app.set('views',templatepath);

//partial ke register
const patialpath = path.join(__dirname,"../templates/partials");
hbs.registerPartials(patialpath);


//build in middleware
//show static website like css file imgae file
const staticpath = path.join(__dirname,'../public');
app.use(express.static(staticpath));



//template engine route
app.get('/',(req,res)=>{
    //render just file name chai ja show korbo
    res.render('home',{
        ddd: "Rijvi"
    });
});

app.get('/smartphone',(req,res)=>{
    res.render('smartphone');
})

//universal char (*)
app.get('/*',(req,res)=>{
    res.render('404')
});




//create server through express
// app.get('/',(req,res)=>{
//     res.status(200).send("<h1>love u about</h1>");
// });


//express by defult object data ke json data te convert kore dai

// app.get('/about',(req,res)=>{
//     res.send([{
//         id:1,
//         name:"Rijvi"
//     },
//     {
//         id:1,
//         name:"Rijvi"
//     },
// ]);
// });


//res.json() will convert non-object data(null,undefine) ,which ar not valid json 
//same kaj res.send() korte pare na

// app.get('/about',(req,res)=>{
//     res.json([{
//         id:1,
//         name:"Rijvi"
//     },
//     {
//         id:1,
//         name:"Rijvi"
//     },
// ]);
// });



//by defult save status codee 200
//multiple html line use aivabe kore.
//send() means html request show kore , then terminate hoi

// app.get('/contact',(req,res)=>{
//     res.write("love u contact");
//     res.write("love u contact");
//     res.send();
// });


//save satatus code 200 

// app.get('/temp',(req,res)=>{
//     res.status(200).send("love u temp");
// });


app.listen(5000, () => {
    console.log('The web server has started on port 3000');
});

//path 2 types 
//relative =   ../../
//absolute =  __dirname

//es6,hbs template engine use for dynamic work in html form ee

