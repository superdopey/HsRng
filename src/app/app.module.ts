import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CardSearchComponent} from './components/card-search.component'
import { PlayerHandComponent} from './components/player-hand.component'
import { PlayerBoardComponent} from './components/player-board.component'
import { IconButtonComponent } from './components/icon-button.component'
import { MinionComponent } from './components/minion.component'
import { RotateStylePipe,MarginStylePipe} from './pipes'



@NgModule({
  imports:      [ 
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule    
     ],
  declarations: [ AppComponent , CardSearchComponent,PlayerHandComponent,PlayerBoardComponent,MinionComponent,RotateStylePipe ,MarginStylePipe, IconButtonComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
