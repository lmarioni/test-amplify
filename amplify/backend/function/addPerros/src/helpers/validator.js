const Perros = require(process.env.WORKSPACE + '/opt/Perros.js')

class Validator {
    static validar() {
        Perros.saludar()
       return {hola: 'mundo'}
   }
}

module.exports = Validator
