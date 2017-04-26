import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CardSearchComponent} from './components/card-search.component'
import { PlayerHandComponent} from './components/player-hand.component'
import { PlayerBoardComponent} from './components/player-board.component'
import { RotateStylePipe,MarginStylePipe} from './pipes'
import { HttpModule, JsonpModule } from '@angular/http';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    JsonpModule    
     ],
  declarations: [ AppComponent , CardSearchComponent,PlayerHandComponent,PlayerBoardComponent,RotateStylePipe ,MarginStylePipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
