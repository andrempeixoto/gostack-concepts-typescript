"use strict";
// For creating a user, we'll need 'name', 'email' and 'password'
Object.defineProperty(exports, "__esModule", { value: true });
function createUser(_a) {
    var name = _a.name, email = _a.email, password = _a.password;
    var user = {
        name: name,
        email: email,
        password: password,
    };
    return user;
}
exports.default = createUser;
