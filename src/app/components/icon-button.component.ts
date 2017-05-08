import { Component, EventEmitter, Output, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({    
    selector: 'icon-button',
   // template: `<button [@heroState]="state" (click)="toggleState()"  class="btn icon-btn {{color}}"><i class="fa {{icon}}"></i></button>`,
    template: `<button  class="btn icon-btn {{color}}"><i class="fa {{icon}}"></i></button>`,
    /*  animations: [
    trigger('heroState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active',   style({
        transform: 'scale(0.9)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
      ]*/

})

export class IconButtonComponent  {
    @Input() icon:string;
    state:string = 'active';
    color:string = 'brown';
    constructor() { }

/*
     toggleState() {
               this.state = (this.state === 'active' ? 'inactive' : 'active');
  }
  */
}