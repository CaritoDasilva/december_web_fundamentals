describe("Testing Algorithms features", () => {
    const numbers = require('../../lib/jasmine_examples/Algorithms');

    it('Dado dos número deberá retornar la suma entre ambos', function() {
        let result = numbers.suma(1, 3);
        expect(result).toEqual(4);
    })

    it('Dado un array retornar el 2do mayor número', function() {
        const arr = [5, 23,56,3,8,10]
        const result = numbers.secondGreater(arr);
        expect(result).toEqual(23);
    })

    it('Dado un array de un largo menor a dos retornar null', function() {
        const arrShorty = [1];
        const result = numbers.secondGreater(arrShorty);
        expect(result).toBeNull();
    })

})