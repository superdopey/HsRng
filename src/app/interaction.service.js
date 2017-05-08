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
var Subject_1 = require("rxjs/Subject");
var InteractionService = (function () {
    function InteractionService() {
        this.showCardSearchSource = new Subject_1.Subject();
        this.showCardSearch$ = this.showCardSearchSource.asObservable();
    }
    InteractionService.prototype.showCardSearch = function (cardSearchSetup) {
        this.showCardSearchSource.next(cardSearchSetup);
    };
    return InteractionService;
}());
InteractionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], InteractionService);
exports.InteractionService = InteractionService;
var CardSearchSetup = (function () {
    function CardSearchSetup(targetCards, cardTypes) {
        this.targetCards = targetCards;
        this.cardTypes = cardTypes;
    }
    return CardSearchSetup;
}());
exports.CardSearchSetup = CardSearchSetup;
var TargetCards;
(function (TargetCards) {
    TargetCards[TargetCards["Enemy"] = 0] = "Enemy";
    TargetCards[TargetCards["Player"] = 1] = "Player";
    TargetCards[TargetCards["Hand"] = 2] = "Hand";
})(TargetCards = exports.TargetCards || (exports.TargetCards = {}));
//# sourceMappingURL=interaction.service.js.map