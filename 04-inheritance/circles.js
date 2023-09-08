"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Shapes_1 = require("./Shapes");
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(height1, width1, radius) {
        var _this = _super.call(this, height1, width1) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return 3.142 * this.radius * this.radius;
    };
    Circle.prototype.getInfo = function () {
        return _super.prototype.getInfo.call(this) + " radius is ".concat(this.radius);
    };
    return Circle;
}(Shapes_1.Shapes));
exports.Circle = Circle;
