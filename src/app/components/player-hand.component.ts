import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../models/card'
import { ICardContainer } from '../models/icard-container'

@Component({
    selector: 'player-hand',
    template: `      
      <div *ngIf="cards" class="player-hand-container">                     
        <ul *ngIf="cards" class="cards">
        <li *ngFor="let card of cards" class="player-card">  
            <img (dblclick)="removeCard(card)"  src="https://art.hearthstonejson.com/v1/render/latest/enUS/256x/{{card.Id}}.png" title="{{card.Name}}">
        </li>
        </ul>      
      </div>
    
  `
})
export class PlayerHandComponent implements ICardContainer {
   

    @Input() maxCards: number;
    @Input() cards: Card[];

    removeCard(card:Card)    {         

            var index = this.cards.indexOf(card);
            if (index > -1) {
                this.cards.splice(index, 1);
            }
    }

    //   @Input() cards: Card[];
    //  @Output() onCardSelected = new EventEmitter<Card>();

}
