const assert = require('assert');
const Decorator = require('../decorator.js');

describe('Decorator', function(){
    let decorator;

    beforeEach(function(){
        decorator = new Decorator();
    });
    
    it('decorator should start with 0 stock', function(){
        const actual = decorator.stock;
        assert.strictEqual(actual, 0);
    });

    it('decorator can add stock', function(){
        decorator.addStock(5);
        const actual = decorator.stock;
        assert.strictEqual(actual, 5);
    });
})