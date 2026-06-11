"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var idFirstLastNameRole;
(function (idFirstLastNameRole) {
    idFirstLastNameRole["Url"] = "https://dummyjson.com/users";
})(idFirstLastNameRole || (idFirstLastNameRole = {}));
async function fetchUsers() {
    try {
        const request = await fetch(idFirstLastNameRole.Url);
        if (!request.ok) {
            throw new Error(`Ошибка сервера: ${request.status}`);
        }
        let data = await request.json();
        data.users.forEach(user => console.log(`${user.id}, ${user.firstName},  ${user.lastName}, ${user.age}, ${user.role},`));
    }
    catch (Error) {
        console.log(`Ошибка`);
    }
}
fetchUsers();
//# sourceMappingURL=script.js.map