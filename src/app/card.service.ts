import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



import { Card, CardSet, CardType } from './models/card'


@Injectable()
export class CardService  {

  private cardsUrl = 'api/cards.collectible.json';  // URL to web API
  public allCards: Card[];

  InvalidTypes: CardType[] = [CardType.HERO, CardType.HERO_POWER];

  StandardSets: CardSet[] = [
    CardSet.CORE, CardSet.EXPERT1, CardSet.OG,
    CardSet.KARA, CardSet.GANGS, CardSet.UNGORO];

  WildSets: CardSet[] = [CardSet.CORE, CardSet.EXPERT1,
  CardSet.BRM, CardSet.TGT, CardSet.LOE, CardSet.OG,
  CardSet.KARA, CardSet.GANGS, CardSet.NAXX, CardSet.GVG, CardSet.UNGORO];

  constructor(private http: Http) {
  }

  initialize(): Promise<Card[]> {
    //console.log("CardService.initialize");

    var p = new Promise<Card[]>((resolve, reject) => {
      this.getCards().then(cards => {
        this.allCards = cards;
        resolve(cards);
      //  console.log("CardService.getcards complete");
      });
    });

    return p;
  }

  private getCards(): Promise<Card[]> {
    return this.http.get(this.cardsUrl)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  searchCards(search: string): Card[] {
    return this.allCards.filter((card: Card) => {
      //console.log(this.StandardSets[0],card.Set);
      if (card != null && search != null
        && card.Name != undefined
        && card.Set != undefined
        && this.StandardSets.indexOf(CardSet[card.Set.toString()]) > -1
        && this.InvalidTypes.indexOf(CardType[card.Type.toString()]) == -1
      ) {
        return card.Name.toLowerCase().indexOf(search.toLowerCase()) > -1;
      }
      return false;
    });
  }

  minionCardsBy(mana: number, health?: number): Card[] {
    return this.allCards.filter((card: Card) => {
      //console.log(this.StandardSets[0],card.Set);
      if (card != null && mana != null
        && card.Name != undefined
        && card.Set != undefined
        && this.StandardSets.indexOf(CardSet[card.Set.toString()]) > -1
        && this.InvalidTypes.indexOf(CardType[card.Type.toString()]) == -1
      ) {        
        //console.log(card.Type ,CardType.MINION.toString());

        return card.Cost == mana && card.Type.toString() == CardType[CardType.MINION.toString()];
      }
      return false;
    });
  }

  generateMinionBoard(amount: number, mana: number): Card[] {

    if (this.allCards != null) {
      //console.log(this.allCards.length);
      let cards: Card[] = this.minionCardsBy(mana);
      let result: Card[] = [];

      for (let i = 0; i < amount; i++) {
        let cards: Card[] = this.minionCardsBy(mana);
        console.log(cards.length)
        result[result.length] = cards[Math.floor(Math.random() * cards.length)];
      }
      return result;
    }


    return null;

  }

  private extractData(res: Response) {
    let body = res.json();
    let result: Card[] = [];

    for (let e of body) {
      let card = new Card(e.id, e.name, e.text, e.flavor, e.artist, e.attack, e.health, e.cost, e.rarity, e.cardClass, e.collectible, e.elite, e.faction, e.mechanics, e.set, e.type);
      result[result.length] = card;
    }
    //console.log(result)
    return result;
  }
  private handleError(error: Response | any) {
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
