
const {v4: uuid} = require('uuid')
const Perros = require('/opt/Perros.js')

exports.handler = async (event) => {
    // TODO implement
    try{
        const a = uuid()
        console.log('a', a)
    
       let b =  Perros.saludar()
       console.log('b', b)
    
        const response = {
            statusCode: 200,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  }, 
            body: JSON.stringify({saludo: a }),
        };
        return response;
    }catch(e){
        console.log('error', e)
    }
};