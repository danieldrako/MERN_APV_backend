import Veterinario from "../models/Veterinario.js";

const registrar = async (req,res) => { 
    const { email} = req.body

    // Prevenir usuarios duplicados
    const existeUsuario = await Veterinario.findOne({email})
    if(existeUsuario){
        const error = new Error('Ya existe un usuario registrado con este correo');
        return res.status(400).json({msg: error.message})
    }

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

 const confirmar = (req,res) =>{
    console.log(req.params.token)//?para leer datos de la url se usa req.params
    
    res.json({msg:'Confirmando cuenta...'})
 }

 export {registrar, perfil, confirmar }; 
