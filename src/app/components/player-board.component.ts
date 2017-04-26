import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../models/card'
import { ICardContainer } from '../models/icard-container'


@Component({
    selector: 'player-board',
    template: `      
        <ul *ngIf="cards" class="player-board-container" [class.enemy]="isEnemy === true">
        <li *ngFor="let card of cards" (dblclick)="removeCard(card)" >      
            <img src="https://art.hearthstonejson.com/v1/render/latest/enUS/256x/{{card.Id}}.png" title="{{card.Name}}">
        </li>
        </ul>   
  `
})

export class PlayerBoardComponent implements ICardContainer {
  
   //,'margin-left': card|  marginStylePipe:cards.length:i 
/*
   right-click menu:
        - fire deathrattle     (dteal rand card,)
*/

    @Input() cards: Card[];
    @Input() isEnemy: boolean;
    //@Output() onCardPlayed = new EventEmitter<Card>();
  
  removeCard(card:Card)    {
            var index = this.cards.indexOf(card);
            if (index > -1) {
                this.cards.splice(index, 1);
            }
    }

    


}



