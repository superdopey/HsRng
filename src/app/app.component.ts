import { Component ,OnInit } from '@angular/core';

import { Card } from './models/card';
import { CardService } from './card.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [CardService]
})


//todo targetContainer (playerHand,playerBoard, enemyboard)


export class AppComponent implements OnInit {

  //fields
  allCards: Card[];
  playerHandCards: Card[] = [];
  playerBoardCards: Card[] = [];
  enemyPlayerBoardCards: Card[] = [];

  maxCardsPlayerHand: number= 10;;
  title = 'My Cards';

  //constructor
  constructor(private cardService: CardService) { }

  //interface
  ngOnInit(): void {
    
    console.log("AppComponnent init");
    this.cardService.initialize().then(cards=>{
        this.allCards = cards;
        this.playerHandCards = cards.slice(9, 19);
    })

      //this.allCards = this.;

      //this.playerHandCards = cards.slice(9, 19);

      
    

    //console.log(this.heroes);
  }

  //events
  //card-search 
  onCardSelected(card: Card) {
    if (this.playerHandCards.length < this.maxCardsPlayerHand)
      this.playerHandCards[this.playerHandCards.length] = card;
  }


  //player-hand 
  onCardPlayed(card:Card){

      console.log("card played",card);

      //full player board, eveolve

      //random, all  minions

      //random, enemies (minions and hero), arcane missiles

      //ragnaros
  }

}

