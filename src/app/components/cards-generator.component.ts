import { Component, OnInit, OnDestroy,Output,EventEmitter } from '@angular/core';
import { InteractionService, TargetCards } from '../interaction.service';
import { Subscription } from 'rxjs/Subscription';
import { CardType } from '../models/card'

@Component({
    selector: 'cards-generator',
    template: `
    <div class="cards-generator" [class.show]="show" >   
        <div class="form">    
        <label for="amount">Amount</label><br/>
        <input id="amount" [(ngModel)]="amount" type="number" min="1" max="7" step="1" /><br/>
        <label for="mana">Mana</label><br/>
        <input id="mana" [(ngModel)]="mana" type="number" min="1" max="10" step="1" /><br/>
        <br/>
        <button (click)="generate()" >Generate</button>
        </div>
    </div>`
})

export class CardGeneratorComponent implements OnInit {
    @Output() onGenerateCards = new EventEmitter<any>();
    amount:number = 4;
    mana:number = 2;

    showCardGeneratorSubscription: Subscription;
    show: boolean;
    cardTypes: CardType[];

    constructor(private interactionService: InteractionService) {
        this.showCardGeneratorSubscription = interactionService.showCardGeneratorSource$.subscribe(
            cardSearchSetup => {
                this.cardTypes = cardSearchSetup.cardTypes;
                this.show = cardSearchSetup.showElement;
            });
    }

    generate(){
        this.onGenerateCards.emit({ amount: this.amount, mana:this.mana });
        //console.log(this.amount,this.mana)

    }

    ngOnInit() { }

    ngOnDestroy() {
        this.showCardGeneratorSubscription.unsubscribe();
    }
}