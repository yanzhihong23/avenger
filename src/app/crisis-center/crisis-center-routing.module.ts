import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CrisisCenterHomeComponent } from './crisis-center-home.component';
import { CrisisListComponent } from './crisis-list.component';
import { CrisisCenterComponent } from './crisis-center.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CrisisCenterComponent,
        children: [
          {
            path: '',
            component: CrisisListComponent,
          }
        ]
      }
    ])
  ],
  exports: [ RouterModule ]
})
export class CrisisCenterRoutingModule { }