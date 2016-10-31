import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CanDeactivateGuard } from './can-deactivate-guard.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full'
      },
      // {
      //   path: 'crisis-center',
      //   component: CrisisListComponent
      // }
    ])
  ],
  exports: [ RouterModule ],
  providers: [ CanDeactivateGuard ],
})
export class AppRoutingModule { }
