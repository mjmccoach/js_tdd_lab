const Decorator = function(){
    this.stock = 0;
};

Decorator.prototype.addStock= function(addedStock){
    this.stock += addedStock;
}

Decorator.prototype.calculateLitres = function(paintCan) {
    let totalLitres = this.stock * paintCan.litres;
    return totalLitres 
}

Decorator.prototype.enoughPaint = function(room) {
    if (this.stock >= room.area) {
        return true
    } else {
        return false
    }
}

Decorator.prototype.enoughStock = function(room) {
    if((this.stock * 2) >= room.area) {
        return true
    } else {
        return false
    }
}

Decorator.prototype.reduceStock = function(room){
    let newStock = this.stock - (room.area / 2)
    return newStock
}

Decorator.prototype.removeEmptyCan = function(can) {
    if (can.litres = 0) {
       let newStock = this.stock -1
       return `We finished a can, stock is now ${newStock}`}
    
}

module.exports = Decorator;