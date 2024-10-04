function ePalindromo(str) {
    const normalizada = str.toLowerCase().replace(/[\W_]/g, '');
    const invertida = normalizada.split('').reverse().join('');
    return normalizada === invertida;
  }
  
  module.exports = ePalindromo;
  