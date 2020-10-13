const Decorator = function(){
    this.stock = 0;
};

Decorator.prototype.addStock= function(addedStock){
    this.stock += addedStock;
}

module.exports = Decorator;