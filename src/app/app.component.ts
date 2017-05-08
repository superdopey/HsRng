import { Component, OnInit, OnDestroy } from '@angular/core';

import { Card } from './models/card';
import { CardService } from './card.service';
import { InteractionService, TargetCards } from './interaction.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [CardService, InteractionService]
})


//todo targetContainer (playerHand,playerBoard, enemyboard)


export class AppComponent implements OnInit, OnDestroy {

  //fields
  //allCards: Card[];
  playerHandCards: Card[] = [];
  playerBoardCards: Card[] = [];
  enemyPlayerBoardCards: Card[] = [];

  maxCardsBoard: number = 7;
  maxCardsPlayerHand: number = 10;
  showCardSearchSubscription: Subscription;
  targetCards: TargetCards;
  title = 'My Cards';

  //constructor
  constructor(private cardService: CardService, private interactionService: InteractionService) {
    this.showCardSearchSubscription = interactionService.showCardSearch$.subscribe(
      cardSearchSetup => {

        this.targetCards = cardSearchSetup.targetCards;
      });

  }

  //interface
  ngOnInit(): void {

    console.log("AppComponnent init");
    this.cardService.initialize().then(cards => {
      //this.allCards = cards;
      this.playerHandCards = cards.slice(9, 19);
      this.playerBoardCards = cards.slice(9, 10) ;
    });

  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.showCardSearchSubscription.unsubscribe();
  }

 onClearBoard(targetCards: TargetCards)
{
  console.log("clear  board", targetCards);

switch (targetCards) {
      case 0:
        //enemy              
           this.enemyPlayerBoardCards=[];

          
        break;
      case 1:
        //player
        console.log("clear player board");
           this.playerBoardCards=[];
        break;
      case 2:
        //hand       
        
          this.playerHandCards=[];
        break;

    }

}

  //events
  //card-search 
  onCardSelected(card: Card) {

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

  }


  //player-hand 
  onCardPlayed(card: Card) {

    console.log("card played", card);

    //full player board, eveolve

    //random, all  minions

    //random, enemies (minions and hero), arcane missiles

    //ragnaros
  }

}

