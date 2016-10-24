import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hero, HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];

  private selectedId: number;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.selectedId = +params['id'];
      this.service.getHeroes()
        .then(heroes => this.heroes = heroes);
    });
  }

  isSelected(hero: Hero) {
    return hero.id === this.selectedId;
  }

  onSelect(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }

}
