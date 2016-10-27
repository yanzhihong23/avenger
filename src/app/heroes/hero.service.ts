import { Injectable } from '@angular/core';

export class Hero {
  constructor(public id: number, public name: string, public state?: string) { }
}

let HEROES = [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'RubberMan')
];

let heroPromise = Promise.resolve(HEROES);

@Injectable()
export class HeroService {
  getHeroes() { return heroPromise };

  getHero(id: number | string) {
    return heroPromise
      .then(heroes => heroes.find(hero => hero.id === +id));
  }
}
