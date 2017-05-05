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
var animations_1 = require("@angular/animations");
var IconButtonComponent = (function () {
    function IconButtonComponent() {
        this.state = 'active';
    }
    IconButtonComponent.prototype.toggleState = function () {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    };
    return IconButtonComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], IconButtonComponent.prototype, "icon", void 0);
IconButtonComponent = __decorate([
    core_1.Component({
        selector: 'icon-button',
        template: "<button   [@heroState]=\"state\" (click)=\"toggleState()\"  class=\"btn icon-btn brown\"><i class=\"fa {{icon}}\"></i></button>",
        animations: [
            animations_1.trigger('heroState', [
                animations_1.state('inactive', animations_1.style({
                    backgroundColor: '#eee',
                    transform: 'scale(1)'
                })),
                animations_1.state('active', animations_1.style({
                    backgroundColor: '#cfd8dc',
                    transform: 'scale(1.1)'
                })),
                animations_1.transition('inactive => active', animations_1.animate('100ms ease-in')),
                animations_1.transition('active => inactive', animations_1.animate('100ms ease-out'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], IconButtonComponent);
exports.IconButtonComponent = IconButtonComponent;
//# sourceMappingURL=icon-button.component.js.map