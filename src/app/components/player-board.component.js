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
var card_service_1 = require("../card.service");
var PlayerBoardComponent = (function () {
    function PlayerBoardComponent(cardService) {
        this.cardService = cardService;
    }
    PlayerBoardComponent.prototype.ngOnInit = function () {
        this.cardService.getCards().then(function (cards) {
            console.log("init");
        });
    };
    //@Output() onCardPlayed = new EventEmitter<Card>();
    PlayerBoardComponent.prototype.removeCard = function (card) {
        var index = this.cards.indexOf(card);
        if (index > -1) {
            this.cards.splice(index, 1);
        }
    };
    PlayerBoardComponent.prototype.generateMinionBoard = function () {
        this.cards = this.cardService.generateMinionBoard(this.amount, this.mana);
    };
    return PlayerBoardComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PlayerBoardComponent.prototype, "cards", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PlayerBoardComponent.prototype, "isEnemy", void 0);
PlayerBoardComponent = __decorate([
    core_1.Component({
        selector: 'player-board',
        template: "      \n        <ul *ngIf=\"cards\" class=\"player-board-container\" [class.enemy]=\"isEnemy === true\">\n        <li *ngFor=\"let card of cards\" (dblclick)=\"removeCard(card)\" >      \n            <img src=\"https://art.hearthstonejson.com/v1/render/latest/enUS/256x/{{card.Id}}.png\" title=\"{{card.Name}}\">\n        </li>\n        <li *ngIf=\"cards.length < 7\">        \n            <div class=\"actions\" >    \n             <button (click)=\"generateMinionBoard()\">fill board</button>\n            amount:<input [(ngModel)]=\"amount\" maxLength=\"1\" /><br/>\n            mana:<input [(ngModel)]=\"mana\"  maxLength=\"1\" /><br/>\n           \n            </div>\n        </li>\n        </ul>   \n  ",
    }),
    __metadata("design:paramtypes", [card_service_1.CardService])
], PlayerBoardComponent);
exports.PlayerBoardComponent = PlayerBoardComponent;
//# sourceMappingURL=player-board.component.js.map