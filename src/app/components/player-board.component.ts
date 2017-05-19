import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Card,CardType } from '../models/card'
import { ICardContainer } from '../models/icard-container'
import { CardService } from '../card.service';
import { InteractionService, TargetCards } from '../interaction.service';

@Component({
    selector: 'player-board',
    template: `      
    <div class="player-board-container" [class.enemy]="isEnemy === true">
        <ul *ngIf="cards" >
        <li *ngFor="let card of cards" (dblclick)="removeCard(card)" >                  
            <minion [card]="card"></minion>
        </li>     
        </ul>   
        <div class="actions-buttons" >    
             <icon-button (click)="clearBoard()" [icon]="'fa-times'"></icon-button>
             <icon-button (click)="showCardSearch()" [icon]="'fa-plus'"></icon-button>
             <icon-button (click)="showCardGenerator()" [icon]="'fa-asterisk'"></icon-button>
        </div>
    </div>
  `,   
})

export class PlayerBoardComponent implements ICardContainer {

 constructor(private cardService: CardService,private interactionService: InteractionService) { }

    @Input() cards: Card[];    
    @Input() isEnemy: boolean;
    @Input() targetCards : TargetCards;

     @Output() onClearBoard = new EventEmitter<TargetCards>();

    amount:number;
    mana:number;
      
    removeCard(card:Card)    {
            var index = this.cards.indexOf(card);
            if (index > -1) {
                this.cards.splice(index, 1);
            }
    }

    //uses service, to communicate with app.component and card-search
    showCardSearch(){            
        this.interactionService.showCardSearch( {showElement:true,  targetCards : this.targetCards, cardTypes:[CardType.MINION]} );      
        this.interactionService.showCardGenerator({showElement:false, targetCards : this.targetCards, cardTypes:[CardType.MINION]} );                      
    }

    showCardGenerator(){
            this.interactionService.showCardGenerator({showElement:true, targetCards : this.targetCards, cardTypes:[CardType.MINION]} );                      
            this.interactionService.showCardSearch( {showElement:false,  targetCards : this.targetCards, cardTypes:[CardType.MINION]} );      
    }

    clearBoard(){        
        this.onClearBoard.emit(this.targetCards);
    }

    generateMinionBoard(){        
        this.cards =  this.cardService.generateMinionBoard(this.amount,this.mana);
    }
}



