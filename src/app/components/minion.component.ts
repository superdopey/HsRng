import { Component, OnInit ,Input} from '@angular/core';
import { Card,CardType } from '../models/card'

@Component({    
    selector: 'minion',            
    template: `
    <div class="entity in-play minion exhausted" title="{{card.Name}}">
        <div class="visuals" style="">
            <img src="https://art.hearthstonejson.com/v1/256x/{{card.Id}}.jpg" class="inplay-portrait" draggable="false">
            <img src="https://s3.amazonaws.com/joust.hearthsim.net/branches/master/assets/images/inplay_minion.png" class="inplay-base" draggable="false">
            <!--<img src="https://s3.amazonaws.com/joust.hearthsim.net/branches/master/assets/images/effect_sleep.png"
                class="effect-sleep" draggable="false"></div>
        <div class="stats">
            <div class="atk">1</div>
            <div class="health">1</div>
        </div>
        -->
    </div>`
    //templateUrl: 'app/components/minion.component.html'
})

export class MinionComponent implements OnInit {
    
    @Input()  card:Card;

    constructor() { 



    }

    ngOnInit() { 
    }
}