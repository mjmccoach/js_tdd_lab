const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js')
const Room = require('../room.js')

describe('Decorator', function(){
    let decorator;
    let paintCan;
    let room;

    beforeEach(function(){
        decorator = new Decorator();
        paintCan = new PaintCan(2)
        room = new Room(5)
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
    
    it('calculate stock in litres', function(){
        decorator.addStock(5);
        const actual = decorator.calculateLitres(paintCan);
        assert.strictEqual(actual, 10)
    });

    it ('is there enough paint?', function(){
        decorator.addStock(5);
        decorator.calculateLitres(paintCan) 
        const actual = decorator.enoughPaint(room)
        assert.strictEqual(actual, true)
    });
    it('is there enough stock?', function(){
        decorator.addStock(5);
        const actual = decorator.enoughStock(room)
        assert.strictEqual(actual, true)
    })

})