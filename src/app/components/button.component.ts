import { Component, OnInit,Input } from '@angular/core';

@Component({    
    selector: 'hs-button',
    template: `<button  class="btn icon-btn {{color}}"><i *ngIf="icon" class="fa {{icon}}"></i><span *ngIf="text" >{{text}}</span></button>`
})

export class ButtonComponent  {
    @Input() icon:string;
    @Input() color:string = 'brown';
    @Input() text:string = 'brown';

    state:string = 'active';
    
    constructor() { }
}