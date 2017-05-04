import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Card } from '../models/card'
import { ICardContainer } from '../models/icard-container'
import { CardService } from '../card.service';

@Component({
    selector: 'player-board',
    template: `      
    <div class="player-board-container" [class.enemy]="isEnemy === true">
        <ul *ngIf="cards" >
        <li *ngFor="let card of cards" (dblclick)="removeCard(card)" >      
            <img src="https://art.hearthstonejson.com/v1/render/latest/enUS/256x/{{card.Id}}.png" title="{{card.Name}}">
        </li>
        <li *ngIf="cards.length < 7" class="action-li">        
                    
        </li>
        </ul>   
        <div class="actions" >    
             <button (click)="generateMinionBoard()">fill board</button>
            amount:<input [(ngModel)]="amount" maxLength="1" /><br/>
            mana:<input [(ngModel)]="mana"  maxLength="1" /><br/>           
            </div>   

        </div>
  `,   
})

export class PlayerBoardComponent implements ICardContainer {
/*
   <div class="actions" >    
             <button (click)="generateMinionBoard()">fill board</button>
            amount:<input [(ngModel)]="amount" maxLength="1" /><br/>
            mana:<input [(ngModel)]="mana"  maxLength="1" /><br/>           
            </div> 
 */


 constructor(private cardService: CardService) { }

    @Input() cards: Card[];    
    @Input() isEnemy: boolean;

    amount:number;
    mana:number;
      
  removeCard(card:Card)    {
            var index = this.cards.indexOf(card);
            if (index > -1) {
                this.cards.splice(index, 1);
            }
    }

    generateMinionBoard(){        
        this.cards =  this.cardService.generateMinionBoard(this.amount,this.mana);
    }
}



