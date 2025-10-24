function validateEmail(email) {
    // Si el email viene vacío, null o undefined, devolvemos false
    if (!email) {
      return false;
    }
  
    // Expresión regular para validar formato de correo0
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }
  
  module.exports = { validateEmail };
  