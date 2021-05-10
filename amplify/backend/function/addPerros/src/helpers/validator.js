const Perros = require(process.env.SHARED_LAYER + '/opt/Perros.js')

class Validator {
    static validar() {
        Perros.saludar()
       return {hola: 'mundo'}
   }
}

module.exports = Validator
