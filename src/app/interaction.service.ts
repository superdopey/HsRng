import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class InteractionService {

   private showCardSearchSource  = new Subject<TargetCards>();
   showCardSearch$ = this.showCardSearchSource.asObservable();

    constructor() { }
    
    showCardSearch(targetCards:TargetCards){
         this.showCardSearchSource.next(targetCards);    
    }
}

export enum TargetCards{
    Enemy,
    Player,
    Hand
}