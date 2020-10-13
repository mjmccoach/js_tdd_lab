const Room = function(area){
    this.area = area;
    this.painted = 0;
}

Room.prototype.paintRoom = function(){
    this.painted += 4;
}

module.exports = Room;