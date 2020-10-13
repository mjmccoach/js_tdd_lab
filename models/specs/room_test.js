const assert = require('assert');
const Room = require ('../room.js');

describe('Room', function(){
    let room;

    beforeEach(function(){
        room = new Room(4)
    });

    it('room should have an area', function(){
        const actual = room.area;
        assert.strictEqual(actual, 4);
    });

    it("room should not be painted", function(){
        const actual = room.painted;
        assert.strictEqual(actual, 0);
    });
    
    it('room should be able to be painted', function(){
        room.paintRoom();
        const actual = room.painted;
        assert.strictEqual(actual, 4);
    });
});
