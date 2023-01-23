import express, { request }  from "express";
import conectarDB from "./config/db.js";

const app = express();

conectarDB()

app.use('/', (req, res) => {
    res.send("Hola mundo")
});


app.listen(4000, () => { 
    console.log("Servidor funcionando en le puerto 4000")
 })

