const {v4: uuid} = require(process.env.NODE_MODULES + 'uuid')
const Perros = require(process.env.SHARED_LAYER + '/opt/Perros.js')
const Validator = require('./helpers/validator')

exports.handler = async (event) => {
    // TODO implement
    try{
        console.log('hola mundo22')
        console.log('hola mundo')
        console.log('hola 333 var lastVersion nose que ')

        const a = uuid()

        const v = Validator.validar()
        console.log('a', a)
        const nodepa = process.env.WORKSPACE
        console.log('b', process.env.NODE_PATH)
    
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

this.handler()