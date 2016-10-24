import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hero, HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.service.getHero(id).then(hero => this.hero = hero);
    });
  }

  gotoHeroes() {
    let heroId = this.hero ? this.hero.id : null;
    this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  }

}
