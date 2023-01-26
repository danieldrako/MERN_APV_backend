const registrar =  (req,res) => { 
    const { email, password, nombre } = req.body

    console.log(email)
    console.log(password)
    console.log(nombre)

    res.json({msg: "registrando usuario"})
 };

const perfil =  (req,res) => { 
    res.json({msg:"mostrando perfil"})
 };

 export {registrar, perfil }; 
