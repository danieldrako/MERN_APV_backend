import express, { request }  from "express";

const app = express();

app.use('/', (req, res) => {
    res.send("Hola mundo")
});


app.listen(4000, () => { 
    console.log("Servidor funcionando en le puerto 4000")
 })

