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
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var card_1 = require("./models/card");
var CardService = (function () {
    function CardService(http) {
        this.http = http;
        this.cardsUrl = 'api/cards.collectible.json'; // URL to web API
    }
    CardService.prototype.ngOnInit = function () {
        var _this = this;
        this.getCards().then(function (cards) {
            _this.allCards = cards;
        });
    };
    CardService.prototype.getCards = function () {
        console.log(this.allCards, "get cards");
        return this.http.get(this.cardsUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CardService.prototype.filterCards = function (amount, mana) {
        if (this.allCards == null) {
        }
        return null;
        /*

        return this.cards.filter((card: Card) => {
            //console.log(this.StandardSets[0],card.Set);
            if (card != null && this.search != null
                && card.Name != undefined
                && card.Set != undefined
                && this.StandardSets.indexOf(CardSet[card.Set.toString()]) > -1
                && this.InvalidTypes.indexOf(CardType[card.Type.toString()]) == -1
            ) {
                return card.Name.toLowerCase().indexOf(search.toLowerCase()) > -1;
            }
            return false;
        });
        */
    };
    CardService.prototype.extractData = function (res) {
        var body = res.json();
        var result = [];
        for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
            var e = body_1[_i];
            var card = new card_1.Card(e.id, e.name, e.text, e.flavor, e.artist, e.attack, e.health, e.cost, e.rarity, e.cardClass, e.collectible, e.elite, e.faction, e.mechanics, e.set, e.type);
            result[result.length] = card;
        }
        //this.allCards = result;
        //console.log(result)
        return result;
    };
    CardService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return CardService;
}());
CardService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CardService);
exports.CardService = CardService;
//# sourceMappingURL=card.service.js.map