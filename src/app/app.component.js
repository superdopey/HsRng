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
var interaction_service_1 = require("./interaction.service");
var AppComponent = (function () {
    //constructor
    function AppComponent(cardService, interactionService) {
        var _this = this;
        this.cardService = cardService;
        this.interactionService = interactionService;
        //fields
        //allCards: Card[];
        this.playerHandCards = [];
        this.playerBoardCards = [];
        this.enemyPlayerBoardCards = [];
        this.maxCardsBoard = 7;
        this.maxCardsPlayerHand = 10;
        this.title = 'My Cards';
        this.showCardSearchSubscription = interactionService.showCardSearch$.subscribe(function (cardSearchSetup) {
            _this.targetCards = cardSearchSetup.targetCards;
        });
    }
    //interface
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("AppComponnent init");
        this.cardService.initialize().then(function (cards) {
            //this.allCards = cards;
            _this.playerHandCards = cards.slice(9, 19);
            _this.playerBoardCards = cards.slice(9, 10);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.showCardSearchSubscription.unsubscribe();
    };
    AppComponent.prototype.onClearBoard = function (targetCards) {
        console.log("clear  board", targetCards);
        switch (targetCards) {
            case 0:
                //enemy              
                this.enemyPlayerBoardCards = [];
                break;
            case 1:
                //player
                console.log("clear player board");
                this.playerBoardCards = [];
                break;
            case 2:
                //hand       
                this.playerHandCards = [];
                break;
        }
    };
    //events
    //card-search 
    AppComponent.prototype.onCardSelected = function (card) {
        switch (this.targetCards) {
            case 0:
                //enemy      
                if (this.enemyPlayerBoardCards.length < this.maxCardsBoard)
                    this.enemyPlayerBoardCards[this.enemyPlayerBoardCards.length] = card;
                console.log(this.enemyPlayerBoardCards);
                break;
            case 1:
                //player
                if (this.playerBoardCards.length < this.maxCardsBoard)
                    this.playerBoardCards[this.playerBoardCards.length] = card;
                break;
            case 2:
                //hand       
                if (this.playerHandCards.length < this.maxCardsPlayerHand)
                    this.playerHandCards[this.playerHandCards.length] = card;
                break;
        }
    };
    //player-hand 
    AppComponent.prototype.onCardPlayed = function (card) {
        console.log("card played", card);
        //full player board, eveolve
        //random, all  minions
        //random, enemies (minions and hero), arcane missiles
        //ragnaros
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        providers: [card_service_1.CardService, interaction_service_1.InteractionService]
    }),
    __metadata("design:paramtypes", [card_service_1.CardService, interaction_service_1.InteractionService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map