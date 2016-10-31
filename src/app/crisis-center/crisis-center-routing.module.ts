import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisCenterComponent } from './crisis-center.component';

import { CanDeactivateGuard } from '../can-deactivate-guard.service';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'crisis-center',
        component: CrisisCenterComponent,
        children: [
          {
            path: '',
            component: CrisisListComponent,
            children: [
              {
                path: ':id',
                component: CrisisDetailComponent,
                canDeactivate: [CanDeactivateGuard]
              },
              {
                path: '',
                component: CrisisCenterHomeComponent
              }
            ]
          }
        ]
      }
    ])
  ],
  exports: [ RouterModule ]
})
export class CrisisCenterRoutingModule { }