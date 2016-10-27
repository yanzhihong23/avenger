import { Component, OnInit, HostBinding, trigger, transition, animate, style, state } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Crisis, CrisisService } from './crisis.service';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  animations: [
    trigger('routeAnimation', [
      state('*', 
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateX(100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition(':leave', [
        animate('0.2s ease-out', style({
          opacity: 0,
          transform: 'translateY(100%)'
        }))
      ])
    ])
  ]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') get routeAnimation() {
    return true;
  }

  @HostBinding('style.display') get display() {
    return 'block';
  }

  @HostBinding('style.positon') get positon() {
    return 'absolute';
  }

  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.service.getCrisis(id).then(crisis => this.crisis = crisis);
    });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    if(this.editName) {
      this.crisis.name = this.editName;
    }
    
    this.gotoCrises();
  }

  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

}
