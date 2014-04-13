/*exported BrickMap*/
/*exported Brick*/

function Brick() {
    if (!(this instanceof Brick)) {
        return new Brick();
    }
    this.type = Brick.GROUND;
}

Brick.prototype.copy = function() {
    b = new Brick();
    b.type = this.type;
    return b;
}

Brick.GROUND = 1;

function BrickMap(opt) {
    if (!(this instanceof BrickMap)) {
        return new BrickMap();
    }

    this._xSize = opt.width || 100;
    this._ySize = opt.height || 100;
    this._array = this._makeArray(this._xSize, this._ySize);
}

BrickMap.prototype._makeArray = function(xs, ys) {
    return new Array(xs * ys);
}

BrickMap.prototype._xyToIndex = function(x, y) {
    console.log("(x,y)", x, y, " = ", this._xSize * y + x);
    return this._xSize*y + x;
}

BrickMap.prototype._idxtoxy = function(idx) {
    var y = idx / this._xSize | 0;
    var x = idx % this._xSize;
    return [x, y];
};

BrickMap.prototype.setXY = function(x, y, sample) {
    this._array[this._xyToIndex(x, y)] = sample.copy();
}

BrickMap.prototype.setLine = function(y, length, sample) {
    for (var x = 0; x < length; x++) {
        this.setXY(x, y, sample);
    }
}

