const  express = require('express');

//Express aplicativo configurando o acesso
const app = express();
app.listen(4000);

app.set('view engine', 'ejs');

//acessando a rota
app.get('/',(req,res) =>{

    //pasando parâmetros para boby
    const blogs = [
        {titulo: ' chamada 1', conteudo:' A primeira chamada'},
        {titulo: ' chamada 2', conteudo:' A segunda chamada'},
        {titulo: ' chamada 3', conteudo:' A terceira chamada'}, 
    ];
    res.render('index', { titulo: 'Home', blogs});
});

//nossa rota
app.get('/sobre', (req,res) =>{
    res.render('sobre', { titulo: 'página sobre'});
});



//redirecionamento de página
app.get('/sobrenos', (req,res)=>{
    res.redirect('/sobre', { titulo: 'sobre'});
});

app.get('/blog/criar', (req,res)=>{
    res.render('/criar', { titulo :'criar novo Blog'});
});

//erro 404
app.use((req,res)  => {

    res.status(404).render('404', { titulo: '404'});
})