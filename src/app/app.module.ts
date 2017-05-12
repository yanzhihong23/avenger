import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MdButtonModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

import { HeroesModule } from './heroes/heroes.module';

import { AuthGuard } from './auth-guard.service';
import { DialogService } from './dialog.service';

import { PreloadSelectedModules } from './selective-preload-strategy';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HeroesModule,
    AppRoutingModule,
    LoginRoutingModule,
    MdButtonModule
  ],
  providers: [ 
    AuthGuard, 
    DialogService,
    PreloadSelectedModules
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
