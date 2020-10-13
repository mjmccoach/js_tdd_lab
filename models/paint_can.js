const PaintCan = function(litres){
    this.litres = litres;
    this.empty = false;
}

PaintCan.prototype.usePaint = function(litresUse){
    let newLitres = this.litres - litresUse;
    this.litres = newLitres
}

module.exports = PaintCan;