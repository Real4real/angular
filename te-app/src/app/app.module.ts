import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {HttpModule} from "@angular/http";
import { LeftBComponent } from './left-b/left-b.component';
import { RigthBComponent } from './rigth-b/rigth-b.component';
import { HeaderBComponent } from './header-b/header-b.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LeftBComponent,
    RigthBComponent,
    HeaderBComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
