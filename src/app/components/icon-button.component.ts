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
    template: `<button   [@heroState]="state" (click)="toggleState()"  class="btn icon-btn brown"><i class="fa {{icon}}"></i></button>`,
      animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]

})

export class IconButtonComponent  {
    @Input() icon:string;
    state:string = 'active';
    constructor() { }

     toggleState() {
               this.state = (this.state === 'active' ? 'inactive' : 'active');
  }
}