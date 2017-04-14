import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { CardSearchComponent} from './components/card-search.component'
import { PlayerHandComponent} from './components/player-hand.component'
import { HttpModule, JsonpModule } from '@angular/http';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    JsonpModule    
     ],
  declarations: [ AppComponent , CardSearchComponent,PlayerHandComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
