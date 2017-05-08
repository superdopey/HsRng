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
        this.InvalidTypes = [card_1.CardType.HERO, card_1.CardType.HERO_POWER];
        this.StandardSets = [
            card_1.CardSet.CORE, card_1.CardSet.EXPERT1, card_1.CardSet.OG,
            card_1.CardSet.KARA, card_1.CardSet.GANGS, card_1.CardSet.UNGORO
        ];
        this.WildSets = [card_1.CardSet.CORE, card_1.CardSet.EXPERT1,
            card_1.CardSet.BRM, card_1.CardSet.TGT, card_1.CardSet.LOE, card_1.CardSet.OG,
            card_1.CardSet.KARA, card_1.CardSet.GANGS, card_1.CardSet.NAXX, card_1.CardSet.GVG, card_1.CardSet.UNGORO];
    }
    CardService.prototype.initialize = function () {
        //console.log("CardService.initialize");
        var _this = this;
        var p = new Promise(function (resolve, reject) {
            _this.getCards().then(function (cards) {
                _this.allCards = cards;
                resolve(cards);
                //  console.log("CardService.getcards complete");
            });
        });
        return p;
    };
    CardService.prototype.getCards = function () {
        return this.http.get(this.cardsUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    CardService.prototype.searchCards = function (search, cardTypes) {
        var _this = this;
        return this.allCards.filter(function (card) {
            //console.log(this.StandardSets[0],card.Set);
            if (card != null && search != null
                && card.Name != undefined
                && card.Set != undefined
                && _this.StandardSets.indexOf(card_1.CardSet[card.Set.toString()]) > -1
                && cardTypes.indexOf(card_1.CardType[card.Type.toString()]) > -1) {
                return card.Name.toLowerCase().indexOf(search.toLowerCase()) > -1;
            }
            return false;
        });
    };
    CardService.prototype.minionCardsBy = function (mana, health) {
        var _this = this;
        return this.allCards.filter(function (card) {
            //console.log(this.StandardSets[0],card.Set);
            if (card != null && mana != null
                && card.Name != undefined
                && card.Set != undefined
                && _this.StandardSets.indexOf(card_1.CardSet[card.Set.toString()]) > -1
                && _this.InvalidTypes.indexOf(card_1.CardType[card.Type.toString()]) == -1) {
                //console.log(card.Type ,CardType.MINION.toString());
                return card.Cost == mana && card.Type.toString() == card_1.CardType[card_1.CardType.MINION.toString()];
            }
            return false;
        });
    };
    CardService.prototype.generateMinionBoard = function (amount, mana) {
        if (this.allCards != null) {
            //console.log(this.allCards.length);
            var cards = this.minionCardsBy(mana);
            var result = [];
            for (var i = 0; i < amount; i++) {
                var cards_1 = this.minionCardsBy(mana);
                console.log(cards_1.length);
                result[result.length] = cards_1[Math.floor(Math.random() * cards_1.length)];
            }
            return result;
        }
        return null;
    };
    CardService.prototype.extractData = function (res) {
        var body = res.json();
        var result = [];
        for (var _i = 0, body_1 = body; _i < body_1.length; _i++) {
            var e = body_1[_i];
            var card = new card_1.Card(e.id, e.name, e.text, e.flavor, e.artist, e.attack, e.health, e.cost, e.rarity, e.cardClass, e.collectible, e.elite, e.faction, e.mechanics, e.set, e.type);
            result[result.length] = card;
        }
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