const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('PaintCan', function(){
    let paintCan;

    beforeEach(function(){
        paintCan = new PaintCan(2)
    });
    it('paintCan should have litres', function(){
        const actual = paintCan.litres;
        assert.strictEqual(actual, 2)
    })
})