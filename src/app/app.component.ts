import { Component } from '@angular/core';

import { Card } from './models/card';
import { CardService } from './card.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl:  './app.component.html',
  providers: [CardService] 
})


//todo targetContainer (playerHand,playerBoard, enemyboard)
export class AppComponent implements OnInit {

  //fields
  cards: Card[] ;
  playerHandCards: Card[] = [] ;
  title = 'My Cards'; 
  
  //constructor
  constructor(private cardService: CardService) { }

  //interface
   ngOnInit(): void {
       this.cardService.getCards().then( cards => { 
         this.cards = cards;          

         this.playerHandCards = cards.slice(9,19);
        });
       
      //console.log(this.heroes);
    }

    //events
    onCardSelected(card:Card)
    {
              
        this.playerHandCards[this.playerHandCards.length] = card;
    }
  
}

