import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

import { AdminModule } from './admin/admin.module';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';

import { AuthGuard } from './auth-guard.service';
import { DialogService } from './dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    CrisisCenterModule,
    AdminModule,
    AppRoutingModule,
    LoginRoutingModule
  ],
  providers: [ 
    AuthGuard, 
    DialogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
