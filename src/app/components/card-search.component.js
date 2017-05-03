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
//import { Card, CardSet} from '../models/card'
var CardSearchComponent = (function () {
    function CardSearchComponent(cardService) {
        this.cardService = cardService;
        this.onCardSelected = new core_1.EventEmitter();
        this.selectedIndex = -1;
    }
    // selectedCard: Card;
    CardSearchComponent.prototype.selectCard = function (card) {
        this.onCardSelected.emit(card);
    };
    CardSearchComponent.prototype.onKey = function (e) {
        if (this.search != "") {
            if (this.previousSearch != this.search)
                this.selectedIndex = -1;
            this.suggestions = this.cardService.searchCards(this.search);
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
            this.previousSearch = this.search;
        }
        else {
            this.selectedIndex = -1;
            this.highlightedCardName = "";
            this.suggestions = [];
        }
    };
    return CardSearchComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CardSearchComponent.prototype, "onCardSelected", void 0);
CardSearchComponent = __decorate([
    core_1.Component({
        selector: 'card-search',
        template: "    \n      <div class=\"card-search\">        \n        <input [(ngModel)]=\"search\" (keyup)=\"onKey($event)\"  placeholder=\"search\"/> \n        <div class=\"suggestions\">       \n        <ul *ngIf=\"suggestions\" >\n        <li *ngFor=\"let card of suggestions\" (click)=\"selectCard(card)\" [class.highlighted]=\"card.Name === highlightedCardName\"  >\n            <span>{{card.Name}}</span>\n             <img  src=\"https://art.hearthstonejson.com/v1/render/latest/enUS/256x/{{card.Id}}.png\" alt=\"{ card.Name }\">                         \n        </li>\n        </ul>\n        </div>      \n      </div>\n  "
    }),
    __metadata("design:paramtypes", [card_service_1.CardService])
], CardSearchComponent);
exports.CardSearchComponent = CardSearchComponent;
//# sourceMappingURL=card-search.component.js.map