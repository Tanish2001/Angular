"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customer1 = void 0;
var customer1 = /** @class */ (function () {
    function customer1(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    customer1.prototype.setFirstName = function (name) {
        this.firstName = name;
    };
    customer1.prototype.setLastName = function (name) {
        this.lastName = name;
    };
    customer1.prototype.getFirstName = function () {
        return this.firstName;
    };
    customer1.prototype.getLastName = function () {
        return this.lastName;
    };
    return customer1;
}());
exports.customer1 = customer1;
var c1 = new customer1("asis", "v");
console.log(c1);
console.log(c1.getFirstName(), c1.getLastName());
