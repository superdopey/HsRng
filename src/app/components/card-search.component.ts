import { Component, Input, EventEmitter, Output,OnDestroy  } from '@angular/core';
import { Card, CardSet, CardType } from '../models/card'
import { CardService } from '../card.service';
import { InteractionService, TargetCards } from '../interaction.service';
import { Subscription }   from 'rxjs/Subscription';
//import * as sd from '../../../node_modules/perfect-scrollbar';
import * as Ps from 'perfect-scrollbar';
//import 'perfect-scrollbar' as ps from 'perfect-scrollbar';

//import { Card, CardSet} from '../models/card'

@Component({
    selector: 'card-search',
    template: `    
      <div class="card-search" [class.show]="show" >        
        <input [(ngModel)]="search" (keyup)="onKey($event)"  placeholder="search"/> 
        <div id="suggestions" >       
        <ul id="suggestion-items"  >
        <li *ngFor="let card of suggestions" (click)="selectCard(card)" [class.highlighted]="card.Name === highlightedCardName"  >
            <span>{{card.Name}}</span>
             <img  src="https://art.hearthstonejson.com/v1/render/latest/enUS/256x/{{card.Id}}.png" alt="{ card.Name }">                                      
        </li>
        </ul>
        </div>      
      </div>
  `
})
export class CardSearchComponent implements OnDestroy  {

    @Output() onCardSelected = new EventEmitter<Card>();
    search: string;
    previousSearch: string;

    suggestions: Card[];
    selectedIndex: number = -1;
    highlightedCardName: string;    
    
    showCardSearchSubscription: Subscription;
    show:boolean;
    cardTypes:CardType[];

   constructor(private cardService: CardService,private interactionService: InteractionService) {

  this.showCardSearchSubscription = interactionService.showCardSearch$.subscribe(
       cardSearchSetup => {
         //console.log("card-search.component", cardSearchSetup.targetCards);
         this.cardTypes = cardSearchSetup.cardTypes;
        this.show = cardSearchSetup.showElement;   
        //this.targetCards = cardSearchSetup.targetCards; 
    });

     
}

 ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.showCardSearchSubscription.unsubscribe();
  }

    // selectedCard: Card;

    selectCard(card: Card) {
        this.onCardSelected.emit(card);
    }

    onKey(e: any) { // without type info

        if (this.search != "") {
            if (this.previousSearch != this.search) this.selectedIndex = -1;
            this.suggestions = this.cardService.searchCards(this.search,this.cardTypes);

                let suggestionItemsElement = document.getElementById('suggestion-items');
                if(suggestionItemsElement!= null) Ps.initialize(suggestionItemsElement);

            //arrow-down(40)  up(38)
            if (e.keyCode == 40) {
                if (this.suggestions != null && this.suggestions.length > 0 && this.suggestions.length > this.selectedIndex) {
                    if (this.selectedIndex < this.suggestions.length - 1) this.selectedIndex++;

                    let card = this.suggestions[this.selectedIndex];
                    this.highlightedCardName = card.Name;
                } else this.selectedIndex = -1;

            } else if (e.keyCode == 38) { //up

                if (this.suggestions != null && this.suggestions.length > 0 && this.selectedIndex > 0) {
                    if (this.selectedIndex < this.suggestions.length - 1) this.selectedIndex--;

                    let card = this.suggestions[this.selectedIndex];
                    this.highlightedCardName = card.Name;
                } else this.selectedIndex = -1;
            } else if (e.keyCode == 13) {//enter
                //this.search = "";
                if (this.suggestions != null && this.suggestions.length > 0) {
                    if (this.highlightedCardName == null)
                        this.selectCard(this.suggestions[0]);
                    else this.selectCard(this.suggestions[this.selectedIndex]);
                }
            }

            this.previousSearch = this.search;
        }else {
            this.selectedIndex = -1;
            this.highlightedCardName = "";
            this.suggestions = [];
        }
    }

/*
    filterCards(search: string): Card[] {
        return this.cards.filter((card: Card) => {
            //console.log(this.StandardSets[0],card.Set);
            if (card != null && this.search != null
                && card.Name != undefined
                && card.Set != undefined
                && this.StandardSets.indexOf(CardSet[card.Set.toString()]) > -1
                && this.InvalidTypes.indexOf(CardType[card.Type.toString()]) == -1
            ) {
                return card.Name.toLowerCase().indexOf(search.toLowerCase()) > -1;
            }
            return false;
        });
    }
    */
}
