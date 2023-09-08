"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle(height, width) {
        this.height = height;
        this.width = width;
        this.height = height;
        this.width = width;
    }
    Rectangle.prototype.getInfo = function () {
        return "Height is ".concat(this.height, " and width is ").concat(this.width);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
