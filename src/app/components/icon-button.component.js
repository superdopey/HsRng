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
var core_1 = require("@angular/core");
var IconButtonComponent = (function () {
    function IconButtonComponent() {
        this.state = 'active';
        this.color = 'brown';
    }
    return IconButtonComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], IconButtonComponent.prototype, "icon", void 0);
IconButtonComponent = __decorate([
    core_1.Component({
        selector: 'icon-button',
        // template: `<button [@heroState]="state" (click)="toggleState()"  class="btn icon-btn {{color}}"><i class="fa {{icon}}"></i></button>`,
        template: "<button  class=\"btn icon-btn {{color}}\"><i class=\"fa {{icon}}\"></i></button>",
    }),
    __metadata("design:paramtypes", [])
], IconButtonComponent);
exports.IconButtonComponent = IconButtonComponent;
//# sourceMappingURL=icon-button.component.js.map