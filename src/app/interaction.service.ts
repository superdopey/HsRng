import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Card, CardSet, CardType } from './models/card'

@Injectable()
export class InteractionService {

   private showCardSearchSource  = new Subject<CardSearchSetup>();
   showCardSearch$ = this.showCardSearchSource.asObservable();

   private showCardGeneratorSource  = new Subject<CardSearchSetup>();
   showCardGeneratorSource$ = this.showCardGeneratorSource.asObservable();

    constructor() { }
    
    showCardSearch(cardSearchSetup:CardSearchSetup){
         this.showCardSearchSource.next(cardSearchSetup);    
    }

     showCardGenerator(cardSearchSetup:CardSearchSetup){
         this.showCardGeneratorSource.next(cardSearchSetup);    
    }
}

export class CardSearchSetup{  
    constructor(public showElement :boolean,public targetCards:TargetCards,public cardTypes:CardType[]) {
        
        
    }
}

export enum TargetCards{
    Enemy = 0,
    Player =1,
    Hand = 2
}