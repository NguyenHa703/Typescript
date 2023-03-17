var ROLE;
(function (ROLE) {
    ROLE[ROLE["STAFF"] = 0] = "STAFF";
    ROLE[ROLE["MANAGER"] = 1] = "MANAGER";
    ROLE[ROLE["USER"] = 2] = "USER";
})(ROLE || (ROLE = {}));
//     role: ROLE.MANAGER | ROLE.STAFF
// }
// type User = {
//     username: string,
//     password: string,
//     email: string,
//     login: () => void,
//     logout: () => void,
// }
// type Admin = User & {
//     role: ROLE.MANAGER | ROLE.STAFF
// }
