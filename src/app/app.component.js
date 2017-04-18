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
var card_service_1 = require("./card.service");
var AppComponent = (function () {
    //constructor
    function AppComponent(cardService) {
        this.cardService = cardService;
        this.playerHandCards = [];
        this.maxCardsPlayerHand = 10;
        this.title = 'My Cards';
    }
    ;
    //interface
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cardService.getCards().then(function (cards) {
            _this.cards = cards;
            _this.playerHandCards = cards.slice(9, 19);
        });
        //console.log(this.heroes);
    };
    //events
    AppComponent.prototype.onCardSelected = function (card) {
        if (this.playerHandCards.length < this.maxCardsPlayerHand)
            this.playerHandCards[this.playerHandCards.length] = card;
    };
    AppComponent.prototype.onCardPlayed = function (card) {
        console.log("card played", card);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        providers: [card_service_1.CardService]
    }),
    __metadata("design:paramtypes", [card_service_1.CardService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map