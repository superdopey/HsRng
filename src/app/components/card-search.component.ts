import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Card, CardSet, CardType } from '../models/card'

//import { Card, CardSet} from '../models/card'

@Component({
    selector: 'card-search',
    template: `    
      <div *ngIf="cards" class="card-search">        
        <input [(ngModel)]="search" (keyup)="onKey($event)"  placeholder="search"/> 
        <div class="suggestions">       
        <ul *ngIf="suggestions" >
        <li *ngFor="let card of suggestions" (click)="selectCard(card)" [class.highlighted]="card.Name === highlightedCardName"  >
             <img  src="https://art.hearthstonejson.com/v1/render/latest/enUS/256x/{{card.Id}}.png" alt="{ card.Name }">                         
        </li>
        </ul>
        </div>      
      </div>
    
  `
})
export class CardSearchComponent {


    @Input() cards: Card[];
    @Output() onCardSelected = new EventEmitter<Card>();
    search: string;
    previousSearch: string;

    suggestions: Card[];
    selectedIndex: number = -1;

    highlightedCardName: string;

    InvalidTypes: CardType[] = [CardType.HERO, CardType.HERO_POWER];

    StandardSets: CardSet[] = [
        CardSet.CORE, CardSet.EXPERT1, CardSet.OG,
        CardSet.KARA, CardSet.GANGS, CardSet.UNGORO];

    WildSets: CardSet[] = [CardSet.CORE, CardSet.EXPERT1,
    CardSet.BRM, CardSet.TGT, CardSet.LOE, CardSet.OG,
    CardSet.KARA, CardSet.GANGS, CardSet.NAXX, CardSet.GVG, CardSet.UNGORO];
    // selectedCard: Card;

    selectCard(card: Card) {
        this.onCardSelected.emit(card);

        // this.highlightedCardName = null;
        //this.search = "";
        // this.suggestions = [];
        //  this.selectedCard = card;
    }



    onKey(e: any) { // without type info

        if (this.previousSearch != this.search) this.selectedIndex = -1;
        this.suggestions = this.filterCards(this.search);


        //arrow-down(40)  up(38)
        if (e.keyCode == 40) {
            if (this.suggestions != null && this.suggestions.length > 0 && this.suggestions.length > this.selectedIndex) {
                if (this.selectedIndex < this.suggestions.length - 1) this.selectedIndex++;

                let card = this.suggestions[this.selectedIndex];
                this.highlightedCardName = card.Name;
            } else this.selectedIndex = -1;

        } else if (e.keyCode == 38) { //up

            if (this.suggestions != null && this.suggestions.length > 0 &&  this.selectedIndex > 0) {
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

        // console.log(this.selectedIndex);
        this.previousSearch = this.search;
    }

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
        })
    }
}
