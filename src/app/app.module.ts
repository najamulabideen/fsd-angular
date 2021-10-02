import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  RouterModule
} from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  AppRoutingModule
} from './app.routing.module';

import {
  AppComponent
} from './app/app.component';
import {
  LoginComponent
} from './login/login.component';
import {
  DirectiveComponent
} from './directive/directive.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
