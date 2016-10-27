import { Component, OnInit, trigger,
  state,
  style,
  transition,
  animate } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Hero, HeroService } from './hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero-list.component.html',
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
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
        .then(heroes => {
          heroes.map(hero => {
            // hero.state = hero.id === this.selectedId ? 'active' : 'inactive';
          });
          this.heroes = heroes;
        });
    });
  }

  isSelected(hero: Hero) {
    return hero.id === this.selectedId;
  }

  onSelect(hero: Hero) {
    this.router.navigate(['/hero', hero.id]);
  }

}
