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
var interaction_service_1 = require("../interaction.service");
var CardGeneratorComponent = (function () {
    function CardGeneratorComponent(interactionService) {
        var _this = this;
        this.interactionService = interactionService;
        this.onGenerateCards = new core_1.EventEmitter();
        this.amount = 4;
        this.mana = 2;
        this.showCardGeneratorSubscription = interactionService.showCardGeneratorSource$.subscribe(function (cardSearchSetup) {
            _this.cardTypes = cardSearchSetup.cardTypes;
            _this.show = cardSearchSetup.showElement;
        });
    }
    CardGeneratorComponent.prototype.generate = function () {
        this.onGenerateCards.emit({ amount: this.amount, mana: this.mana });
        //console.log(this.amount,this.mana)
    };
    CardGeneratorComponent.prototype.ngOnInit = function () { };
    CardGeneratorComponent.prototype.ngOnDestroy = function () {
        this.showCardGeneratorSubscription.unsubscribe();
    };
    return CardGeneratorComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CardGeneratorComponent.prototype, "onGenerateCards", void 0);
CardGeneratorComponent = __decorate([
    core_1.Component({
        selector: 'cards-generator',
        template: "\n    <div class=\"cards-generator\" [class.show]=\"show\" >   \n        <div class=\"form\">    \n        <label for=\"amount\">Amount</label><br/>\n        <input id=\"amount\" [(ngModel)]=\"amount\" type=\"number\" min=\"1\" max=\"7\" step=\"1\" /><br/>\n        <label for=\"mana\">Mana</label><br/>\n        <input id=\"mana\" [(ngModel)]=\"mana\" type=\"number\" min=\"1\" max=\"10\" step=\"1\" /><br/>\n        <br/>\n        <button (click)=\"generate()\" >Generate</button>\n        </div>\n    </div>"
    }),
    __metadata("design:paramtypes", [interaction_service_1.InteractionService])
], CardGeneratorComponent);
exports.CardGeneratorComponent = CardGeneratorComponent;
//# sourceMappingURL=cards-generator.component.js.map