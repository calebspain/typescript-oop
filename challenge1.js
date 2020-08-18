var User = /** @class */ (function () {
    function User(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.emailMatch = function (email) {
        return this.email === email;
    };
    return User;
}());