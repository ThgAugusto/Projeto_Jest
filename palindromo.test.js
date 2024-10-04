const ePalindromo = require('./palindromo');

test('a palavra "tenet" é um palíndromo', () => {
  expect(ePalindromo('tenet')).toBe(true);
});

test('a palavra "java" não é um palíndromo', () => {
  expect(ePalindromo('palindromo')).toBe(false);
});

test('uma string vazia é considerada um palíndromo', () => {
  expect(ePalindromo('')).toBe(true);
});

test('o palíndromo "A man, a plan, a canal, Panama!" deve retornar true', () => {
  expect(ePalindromo('A man, a plan, a canal, Panama!')).toBe(true);
});
