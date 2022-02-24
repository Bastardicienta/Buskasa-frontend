import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { PrincipalComponent } from './components/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    ApartmentsComponent,
    LoginComponentComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
