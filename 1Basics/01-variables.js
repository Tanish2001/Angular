var Players = ["Vedang"];
for (var _i = 0, Players_1 = Players; _i < Players_1.length; _i++) {
    var player = Players_1[_i];
    console.log(player);
}
var customer = /** @class */ (function () {
    function customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    customer.prototype.setFirstName = function (name) {
        this.firstName = name;
    };
    customer.prototype.setLastName = function (name) {
        this.lastName = name;
    };
    customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    customer.prototype.getLastName = function () {
        return this.lastName;
    };
    return customer;
}());
var c1 = new customer("asis", "v");
console.log(c1);
console.log(c1.getFirstName(), c1.getLastName());
