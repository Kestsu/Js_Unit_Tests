const productDetails = require("../src/productDetails");

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/
// Teste se productDetails é uma função.
// Teste se o retorno da função é um array.
// Teste se o array retornado pela função contém dois itens dentro.
// Teste se os dois itens dentro do array retornado pela função são objetos.
// Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
// Teste se os dois productIds terminam com 123.

describe("6 - Implemente os casos de teste para a função `productDetails`", () => {
  it("Teste se productDetails é uma função.", () => {
    expect(typeof productDetails === "function");
  });

  it("Teste se o retorno da função é um array.", () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBeTruthy()
  });

  it("Teste se o array retornado pela função contém dois itens dentro.", () => {
    expect(productDetails("Alcool gel", "Máscara").length).toBe(2);
  });
  it("Teste se os dois itens dentro do array retornado pela função são objetos.", () => {
    expect(typeof productDetails("Alcool gel", "Máscara")[0]).toBe('object');
    expect(typeof productDetails("Alcool gel", "Máscara")[1]).toBe('object');
  });
  it("Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.", () => {
    expect(productDetails('Alcool gel', 'Máscara')[0] !== productDetails('Alcool gel', 'Máscara')[1]).toBeTruthy()
  });
  it("Teste se os dois productIds terminam com 123.", () => {
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId === 'Alcool gel123').toBeTruthy()
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId === 'Máscara123').toBeTruthy()
  });
});
