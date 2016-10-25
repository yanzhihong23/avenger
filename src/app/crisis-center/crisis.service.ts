import { Injectable } from '@angular/core';

export class Crisis {
  constructor(public id: number, public name: string) { }
}

let CRISES = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again')
];

let crisesPromise = Promise.resolve(CRISES);

@Injectable()
export class CrisisService {
  getCrises() { return crisesPromise };

  getCrisis(id: number | string) {
    return crisesPromise
      .then(heroes => heroes.find(hero => hero.id === +id));
  }
}
