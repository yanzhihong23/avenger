import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './can-deactivate-guard.service';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canLoad: [ AuthGuard ]
      },
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
