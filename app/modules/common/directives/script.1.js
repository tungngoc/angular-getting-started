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
const domHelper_1 = require("../helpers/domHelper");
let Script = class Script {
    ngAfterContentInit() {
        domHelper_1.default.createScript(this.src);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], Script.prototype, "src", void 0);
Script = __decorate([
    core_1.Component({
        selector: "app-script",
        template: ""
    }), 
    __metadata('design:paramtypes', [])
], Script);
exports.Script = Script;
//# sourceMappingURL=script.1.js.map