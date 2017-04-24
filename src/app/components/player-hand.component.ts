import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../models/card'
import { ICardContainer } from '../models/icard-container'


@Component({
    selector: 'player-hand',
    template: `      
                       
        <div *ngIf="selectedCard" class="tooltip">
            <img (dblclick)="deSelectCard(selectedCard)" (click)="playCard(selectedCard)" src="https://art.hearthstonejson.com/v1/render/latest/enUS/256x/{{selectedCard.Id}}.png" title="{{selectedCard.Name}}">
        </div>
        <ul *ngIf="cards" class="player-hand-container">
        <li *ngFor="let card of cards; let i = index" 
            (dblclick)="removeCard(card)" (click)="selectCard(card)"
            class="player-card" [ngStyle]="{'transform': card | rotateStylePipe:cards.length:i,'margin-left': card|  marginStylePipe:cards.length:i  }" >      
            <img src="https://art.hearthstonejson.com/v1/render/latest/enUS/256x/{{card.Id}}.png" title="{{card.Name}}">
        </li>
        </ul>   
  `
})

export class PlayerHandComponent implements ICardContainer {
  
   //,'margin-left': card|  marginStylePipe:cards.length:i 


    @Input() cards: Card[];
    @Output() onCardPlayed = new EventEmitter<Card>();
  
    selectedCard:Card;
    

    removeCard(card:Card)    {         

            var index = this.cards.indexOf(card);
            if (index > -1) {
                this.cards.splice(index, 1);
            }
    }

     selectCard(card:Card)    {         
            this.selectedCard = card;           
    }

     playCard(card:Card)    {         
           // this.selectedCard = card;   
           this.onCardPlayed.emit(card);
           this.selectedCard = null;

           //remove from cards
    }

    deSelectCard(card:Card)    {         
            this.selectedCard = null;           
    }

    //   @Input() cards: Card[];
    //  @Output() onCardSelected = new EventEmitter<Card>();

}



