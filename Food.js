class Food {
    _x;
    _y;
    _width;
    _height;
    _src

    constructor(_x, _y, _width, _height, _src) {
        this._src = _src;
        this._x = _x;
        this._y = _y;
        this._width = _width;
        this._height = _height;
    }


    get x() {
        return this._x;
    }

    set x(value) {
        this._x = value;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }

    get src() {
        return this._src;
    }

    set src(value) {
        this._src = value;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    drawNewFood() {
        let image = new Image();
        let topLeftX = this._x -  this._width / 2;
        let topLeftY = this._y -  this._height / 2;
        image.src = this._src;
        ctx.drawImage(image, topLeftX, topLeftY, this._width, this._height);
        }
    }
