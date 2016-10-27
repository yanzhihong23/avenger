import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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
  providers: [],
})
export class AppRoutingModule { }
