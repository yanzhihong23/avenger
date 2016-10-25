import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CrisisListComponent } from './crisis-center/crisis-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
      },
      {
        path: 'crisis-center',
        component: CrisisListComponent
      }
    ])
  ],
  exports: [ RouterModule ],
  providers: [],
})
export class AppRoutingModule { }
