"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const users_1 = require("./user/users");
const module_1 = require("../common/module");
const addNewUser_1 = require("./user/addNewUser");
let routes = [
    { path: "users", component: users_1.Users },
    { path: "addNewUser", component: addNewUser_1.AddNewUser }
];
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    core_1.NgModule({
        imports: [module_1.CommonModule, router_1.RouterModule.forChild(routes)],
        declarations: [users_1.Users, addNewUser_1.AddNewUser],
        exports: [router_1.RouterModule]
    }), 
    __metadata('design:paramtypes', [])
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=module.js.map