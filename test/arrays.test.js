/* É importada nesse arquivo tanto as funções do gabarito quanto dos desafios */

/* Gabaritos */
/* const {
  getMaxNumber,
  getMinNumber,
  findGuest,
  dataType,
  findOldestSon,
} = require("../Desafios/Arrays/Gabaritos/1-5"); */

/* Exercícios */
const {
  getMaxNumber,
  getMinNumber,
  findGuest,
  dataType,
  findOldestSon,
} = require("../Desafios/Arrays/");

describe("Desafios de Arrays.", () => {
  describe("01 - Testando a Função getMaxNumber.", () => {
    it("Ao passar o argumento [22, 65, 80, 1, 4], deve retornar: 80", () => {
      expect(getMaxNumber([22, 65, 80, 1, 4])).toBe(80);
    });
    it("Ao passar o argumento [-22, 65, -80, 1, 4], deve retornar: 65", () => {
      expect(getMaxNumber([-22, 65, -80, 1, 4])).toBe(65);
    });
  });

  describe("02 - Testando a Função getMinNumber.", () => {
    it("Ao passar o argumento [875, 65, 42, 100, 12, 77], deve retornar: 12", () => {
      expect(getMinNumber([875, 65, 42, 100, 12, 77])).toBe(12);
    });
    it("Ao passar o argumento [-875, 65, -42, 100, 12, 77], deve retornar: -875", () => {
      expect(getMinNumber([-875, 65, -42, 100, 12, 77])).toBe(-875);
    });
  });

  describe("03 - Testando a Função findGuest.", () => {
    it("Ao passar os argumentos ['Sara', 'Gabriel', 'Maria', 'Davi', 'Julio'], e 'Davi', deve retornar: 'O nome está na lista.'", () => {
      expect(findGuest(['Sara', 'Gabriel', 'Maria', 'Davi', 'Julio'], 'Davi')).toBe(
        "O nome está na lista."
      );
    });
    it("Ao passar os argumentos ['Sara', 'Gabriel', 'Maria', 'Davi', 'Julio'], e 'Antônio', deve retornar: 'O nome não está na lista.'", () => {
      expect(findGuest(["Sara", "Gabriel", "Maria", "Davi", "Julio"], "Antônio")).toBe(
        "O nome não está na lista."
      );
    });
  });

  describe("04 - Testando a Função dataType.", () => {
    it("Ao passar o argumento ['Daniel', 'John', 'Marcos'], deve retornar: true", () => {
      expect(dataType(['Daniel', 'John', 'Marcos'])).toBe(true);
    });
    it("Ao passar o argumento ['Daniel', 'John', 1], deve retornar: false", () => {
      expect(dataType(["Daniel", "John", 1])).toBe(false);
    });
    it("Ao passar o argumento [ 40, 121, -14], deve retornar: true", () => {
      expect(dataType([40, 121, -14])).toBe(true);
    });
    it("Ao passar o argumento [true, false, true], deve retornar: true", () => {
      expect(dataType([true, false, true])).toBe(true);
    });
    it("Ao passar o argumento [true, false, 0], deve retornar: false", () => {
      expect(dataType([true, false, 0])).toBe(false);
    });
  });

  describe("05 - Testando a Função findOldestSon.", () => {
    it("Ao passar os argumentos 40 e [11, 8, 9], deve retornar: 'O filho mais velho tem 12 anos.'", () => {
      expect(findOldestSon(40, [11, 8, 9])).toBe(
        "O filho mais velho tem 12 anos."
      );
    });
    it("Ao passar os argumentos 60 e [12, 16, 20], deve retornar: 'O filho mais velho tem 21 anos.'", () => {
      expect(findOldestSon(60, [11, 16, 12])).toBe(
        "O filho mais velho tem 21 anos."
      );
    });
    it("Ao passar os argumentos 37 e [9, 6, 12], deve retornar: 'O filho mais velho tem 12 anos.'", () => {
      expect(findOldestSon(37, [9, 6, 12])).toBe(
        "O filho mais velho tem 12 anos."
      );
    });
  });
});
