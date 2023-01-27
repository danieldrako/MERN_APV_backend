const generarId= () => { 
    return (Date.now()*Math.random()).toString(32)
 };

 export default generarId