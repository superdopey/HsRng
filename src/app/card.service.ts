import { Injectable,OnInit } from '@angular/core';
import { Http, Response }          from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



import { Card } from './models/card';


@Injectable()
export class CardService {

     private cardsUrl = 'api/cards.collectible.json';  // URL to web API
     constructor (private http: Http) {}

getCards (): Promise<Card[]> {
  return this.http.get(this.cardsUrl)
                  .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
}

private extractData(res: Response) {
  let body = res.json();
  let result:Card[] = [];

  for (let e of body) {
    let card = new Card(e.id,e.name,e.text,e.flavor,e.artist,e.attack,e.health,e.cost,e.rarity,e.cardClass,e.collectible,e.elite,e.faction,e.mechanics,e.set,e.type);
    result[result.length] = card;
}
 

 
//console.log(result)
  return result;
}
private handleError (error: Response | any) {
  // In a real world app, we might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Promise.reject(errMsg);
}
 }
