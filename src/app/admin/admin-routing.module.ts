import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { ManageCrisesComponent } from './manage-crisis.component';
import { ManageHeroesComponent } from './manage-hero.component';

import { AuthGuard } from '../auth-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: '',
            children: [
              { path: 'crises', component: ManageCrisesComponent },
              { path: 'heroes', component: ManageHeroesComponent },
              { path: '', component: AdminDashboardComponent }
            ]
          }
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}