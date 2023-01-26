import Veterinario from "../models/Veterinario.js";

const registrar = async (req,res) => { 
    //const { email, password, nombre } = req.body

    try {
        //*Guardar un nuevo veterinario
        const veterinario = new Veterinario(req.body);
        const veterinarioGuardado = await  veterinario.save();
        
        res.json(veterinarioGuardado)
    } catch (error) {
        console.log(error)
    }



 };

const perfil =  (req,res) => { 
    res.json({msg:"mostrando perfil"})
 };

 export {registrar, perfil }; 
