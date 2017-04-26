import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../models/card'
import { ICardContainer } from '../models/icard-container'
import { CardService } from '../card.service';

@Component({
    selector: 'player-board',
    template: `      
        <ul *ngIf="cards" class="player-board-container" [class.enemy]="isEnemy === true">
        <li *ngFor="let card of cards" (dblclick)="removeCard(card)" >      
            <img src="https://art.hearthstonejson.com/v1/render/latest/enUS/256x/{{card.Id}}.png" title="{{card.Name}}">
        </li>
        <li *ngIf="cards.length < 7">
            <button (click)="fillCards()">fill board</button>
            amount:<input [(ngModel)]="amount" maxLength="1" /><br/>
            mana:<input [(ngModel)]="mana"  maxLength="1" /><br/>
        </li>
        </ul>   
  `,
   providers: [CardService]
})

export class PlayerBoardComponent implements ICardContainer {  
 constructor(private cardService: CardService) { }

   //,'margin-left': card|  marginStylePipe:cards.length:i 
/*
   right-click menu:
        - fire deathrattle     (dteal rand card,)
*/

    @Input() cards: Card[];
    
    @Input() isEnemy: boolean;

    amount:number;
    mana:number;
    //@Output() onCardPlayed = new EventEmitter<Card>();
  
  removeCard(card:Card)    {
            var index = this.cards.indexOf(card);
            if (index > -1) {
                this.cards.splice(index, 1);
            }
    }

    fillCards(){
        console.log(this.amount,this.mana);

          this.cardService.getCards().then(cards => {

      
    });


    }

    


}



