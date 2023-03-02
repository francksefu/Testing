const strLength = require("./functions");
function renverser(str) {
    return str.split("").reverse().join("") ;
}

class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }

    substract() {
        return this.a - this.b;
    }

    divide() {
        return this.a / this.b;
    }

    multiply() {
        return this.a * this.b;
    }
}

function capitalizeString(str) {
    let tab = str.split('');
    tab[0] = tab[0].toUpperCase();
    return tab.join('');
}

test('Check if length is correct', () => {
    //exercise1
    const bon = strLength('Morning');
    expect(bon).toBe(7);
    expect(() => strLength('toooooooLonguuueeeee')).toThrow(Error);
    //exercice2
    const renv = renverser('bon');
    expect(renv).toBe('nob');
    //exercise4

    
});

describe('my calculator', () => {
  const obj = new Calculator(12, 4);
  test('add', () => {
    expect(obj.add()).toBe(16);
  });

  test('substract', () => {
    expect(obj.substract()).toBe(8);
  });

  test('divided', () => {
    expect(obj.divide()).toBe(3);
  })

  test('multiply', () => {
    expect(obj.multiply()).toBe(48);
  });

  test('Capitalze', () => {
    const bonne = capitalizeString('bonne');
    expect(bonne).toBe('Bonne');
  });
});

