const math = require('../math');

test('soma 2 + 3 igual a 5', () => { 
expect(math.add(2, 3)).toBe(5); 
});

test('subtração 5 - 2 igual a 3', () =>{
    expect(math.subtract(5, 2)).toBe(3);
})

test('multplicação 5 x 3 igual a 15',()=>{
    expect(math.multiply(5, 3)).toBe(undefined);
})

test('divisão 10 / 2 iagual a 5',()=>{
    expect(math.divide(10, 2)).toBe(5);
})

test('divide por zero', ()=>{
    expect(math.divide(10, 0)).toBe(Infinity)
})
