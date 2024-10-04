const { soma, subtracao, multiplicacao, divisao } = require('./calculadora');

test('soma de 1 e 2 é 3', () => {
  expect(soma(1, 2)).toBe(3);
});

test('subtração de 6 por 4 é 2', () => {
  expect(subtracao(6, 4)).toBe(2);
});

test('multiplicação de 5 e 3 é 15', () => {
  expect(multiplicacao(5, 3)).toBe(15);
});

test('divisão de 10 por 2 é 5', () => {
  expect(divisao(10, 2)).toBe(5);
});

test('divisão por zero deve lançar erro', () => {
  expect(() => divisao(1, 0)).toThrow('Divisão por zero');
});
