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
var PlayerHandComponent = (function () {
    function PlayerHandComponent() {
        //,'margin-left': card|  marginStylePipe:cards.length:i 
        this.onCardPlayed = new core_1.EventEmitter();
        //   @Input() cards: Card[];
        //  @Output() onCardSelected = new EventEmitter<Card>();
    }
    PlayerHandComponent.prototype.removeCard = function (card) {
        var index = this.cards.indexOf(card);
        if (index > -1) {
            this.cards.splice(index, 1);
        }
    };
    PlayerHandComponent.prototype.selectCard = function (card) {
        this.selectedCard = card;
    };
    PlayerHandComponent.prototype.playCard = function (card) {
        // this.selectedCard = card;   
        this.onCardPlayed.emit(card);
        this.selectedCard = null;
        //remove from cards
    };
    PlayerHandComponent.prototype.deSelectCard = function (card) {
        this.selectedCard = null;
    };
    return PlayerHandComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], PlayerHandComponent.prototype, "cards", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PlayerHandComponent.prototype, "onCardPlayed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], PlayerHandComponent.prototype, "targetCards", void 0);
PlayerHandComponent = __decorate([
    core_1.Component({
        selector: 'player-hand',
        template: "      \n                       \n        <div *ngIf=\"selectedCard\" class=\"tooltip\">            \n            <div>\n                <a (click)=\"playCard(selectedCard)\" >Play</a>\n                <img (click)=\"deSelectCard(selectedCard)\" src=\"https://art.hearthstonejson.com/v1/render/latest/enUS/256x/{{selectedCard.Id}}.png\" title=\"{{selectedCard.Name}}\">                \n            </div>\n        </div>\n        <ul *ngIf=\"cards\" class=\"player-hand-container\">\n        <li *ngFor=\"let card of cards; let i = index\" \n            (dblclick)=\"removeCard(card)\" (click)=\"selectCard(card)\"\n            class=\"player-card\" [ngStyle]=\"{'transform': card | rotateStylePipe:cards.length:i,'margin-left': card|  marginStylePipe:cards.length:i  }\" >      \n            <img src=\"https://art.hearthstonejson.com/v1/render/latest/enUS/256x/{{card.Id}}.png\" title=\"{{card.Name}}\">\n        </li>\n        </ul>   \n  "
    })
], PlayerHandComponent);
exports.PlayerHandComponent = PlayerHandComponent;
//# sourceMappingURL=player-hand.component.js.map