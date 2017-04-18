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
var card_1 = require("../models/card");
//import { Card, CardSet} from '../models/card'
var CardSearchComponent = (function () {
    function CardSearchComponent() {
        this.onCardSelected = new core_1.EventEmitter();
        this.selectedIndex = -1;
        this.InvalidTypes = [card_1.CardType.HERO, card_1.CardType.HERO_POWER];
        this.StandardSets = [
            card_1.CardSet.CORE, card_1.CardSet.EXPERT1, card_1.CardSet.OG,
            card_1.CardSet.KARA, card_1.CardSet.GANGS, card_1.CardSet.UNGORO
        ];
        this.WildSets = [card_1.CardSet.CORE, card_1.CardSet.EXPERT1,
            card_1.CardSet.BRM, card_1.CardSet.TGT, card_1.CardSet.LOE, card_1.CardSet.OG,
            card_1.CardSet.KARA, card_1.CardSet.GANGS, card_1.CardSet.NAXX, card_1.CardSet.GVG, card_1.CardSet.UNGORO];
    }
    // selectedCard: Card;
    CardSearchComponent.prototype.selectCard = function (card) {
        this.onCardSelected.emit(card);
        // this.highlightedCardName = null;
        //this.search = "";
        // this.suggestions = [];
        //  this.selectedCard = card;
    };
    CardSearchComponent.prototype.onKey = function (e) {
        if (this.previousSearch != this.search)
            this.selectedIndex = -1;
        this.suggestions = this.filterCards(this.search);
        //arrow-down(40)  up(38)
        if (e.keyCode == 40) {
            if (this.suggestions != null && this.suggestions.length > 0 && this.suggestions.length > this.selectedIndex) {
                if (this.selectedIndex < this.suggestions.length - 1)
                    this.selectedIndex++;
                var card = this.suggestions[this.selectedIndex];
                this.highlightedCardName = card.Name;
            }
            else
                this.selectedIndex = -1;
        }
        else if (e.keyCode == 38) {
            if (this.suggestions != null && this.suggestions.length > 0 && this.selectedIndex > 0) {
                if (this.selectedIndex < this.suggestions.length - 1)
                    this.selectedIndex--;
                var card = this.suggestions[this.selectedIndex];
                this.highlightedCardName = card.Name;
            }
            else
                this.selectedIndex = -1;
        }
        else if (e.keyCode == 13) {
            //this.search = "";
            if (this.suggestions != null && this.suggestions.length > 0) {
                if (this.highlightedCardName == null)
                    this.selectCard(this.suggestions[0]);
                else
                    this.selectCard(this.suggestions[this.selectedIndex]);
            }
        }
        // console.log(this.selectedIndex);
        this.previousSearch = this.search;
    };
    CardSearchComponent.prototype.filterCards = function (search) {
        var _this = this;
        return this.cards.filter(function (card) {
            //console.log(this.StandardSets[0],card.Set);
            if (card != null && _this.search != null
                && card.Name != undefined
                && card.Set != undefined
                && _this.StandardSets.indexOf(card_1.CardSet[card.Set.toString()]) > -1
                && _this.InvalidTypes.indexOf(card_1.CardType[card.Type.toString()]) == -1) {
                return card.Name.toLowerCase().indexOf(search.toLowerCase()) > -1;
            }
            return false;
        });
    };
    return CardSearchComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], CardSearchComponent.prototype, "cards", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CardSearchComponent.prototype, "onCardSelected", void 0);
CardSearchComponent = __decorate([
    core_1.Component({
        selector: 'card-search',
        template: "    \n      <div *ngIf=\"cards\" class=\"card-search\">        \n        <input [(ngModel)]=\"search\" (keyup)=\"onKey($event)\"  placeholder=\"search\"/> \n        <div class=\"suggestions\">       \n        <ul *ngIf=\"suggestions\" >\n        <li *ngFor=\"let card of suggestions\" (click)=\"selectCard(card)\" [class.highlighted]=\"card.Name === highlightedCardName\"  >\n             <img  src=\"https://art.hearthstonejson.com/v1/render/latest/enUS/256x/{{card.Id}}.png\" alt=\"{ card.Name }\">                         \n        </li>\n        </ul>\n        </div>      \n      </div>\n    \n  "
    })
], CardSearchComponent);
exports.CardSearchComponent = CardSearchComponent;
//# sourceMappingURL=card-search.component.js.map