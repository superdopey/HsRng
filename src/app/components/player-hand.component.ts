import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Card } from '../models/card'
import { ICardContainer } from '../models/icard-container'
import { InteractionService, TargetCards } from '../interaction.service';


@Component({
    selector: 'player-hand',
    template: `      
                       
        <div *ngIf="selectedCard" class="tooltip">            
            <div>                
                <img (click)="deSelectCard(selectedCard)" src="https://art.hearthstonejson.com/v1/render/latest/enUS/256x/{{selectedCard.Id}}.png" title="{{selectedCard.Name}}">                
                <div class='button-row'>
                    <hs-button (click)="playCard(selectedCard)" [text]="'Play'" [color]="'brown'" [icon]="'fa-chevron-up'"></hs-button>
                    <icon-button (click)="removeCard(selectedCard)" [color]="'red'" [icon]="'fa-times'"></icon-button>
                 </div>
                 <div class='button-row bottom'>
                    <hs-button (click)="returnCard()" [text]="'Back'" [color]="'brown'" [icon]="'fa-chevron-down'">sd</hs-button>                 
                </div>
            </div>
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
     @Input() targetCards : TargetCards;
  
    selectedCard:Card;   

    removeCard(card:Card)    {         
            var index = this.cards.indexOf(card);
            if (index > -1) {
                this.cards.splice(index, 1);
                this.selectedCard = null;
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

    returnCard(){
        this.selectedCard = null;
    }

    deSelectCard(card:Card)    {         
            this.selectedCard = null;           
    }

    //   @Input() cards: Card[];
    //  @Output() onCardSelected = new EventEmitter<Card>();

}



