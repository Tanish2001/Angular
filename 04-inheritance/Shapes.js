"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shapes = void 0;
var Shapes = /** @class */ (function () {
    function Shapes(height, width) {
        this.height = height;
        this.width = width;
        // this.height=height
        // this.width=width
    }
    Shapes.prototype.getInfo = function () {
        return "height= ".concat(this.height, " and width = ").concat(this.width);
    };
    return Shapes;
}());
exports.Shapes = Shapes;
