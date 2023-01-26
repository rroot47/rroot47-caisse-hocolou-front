import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthService} from "./services/auth.service";
import {RequestInterceptorService} from "./services/requestInterceptor.service";
import { MembreComponent } from './membre/membre.component';
import { HeaderComponent } from './header/header.component';
import {AuthGuardService} from "./services/auth.guard.service";
import { AdherentComponent } from './adherent/adherent.component';
import { AdminComponent } from './admin/admin.component';
import { DetteComponent } from './dette/dette.component';
import { EditMembreComponent } from './edit-membre/edit-membre.component';
import { DepenseComponent } from './depense/depense.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path : 'signin', component:SigninComponent},
  {path : 'signup', component:SignupComponent},
  {path : 'admin', component:AdminComponent,  canActivate:[AuthGuardService], children:[
      {path : 'adherent', component:AdherentComponent},
      {path : 'member', component:MembreComponent},
      {path : 'dette', component:DetteComponent},
      {path : 'depense', component:DepenseComponent},
      {path : 'edit-member/:id', component:EditMembreComponent}
    ]},
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : '**', redirectTo : 'home'},

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    SignupComponent,
    MembreComponent,
    HeaderComponent,
    AdherentComponent,
    AdminComponent,
    DetteComponent,
    EditMembreComponent,
    DepenseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthGuardService, {provide:HTTP_INTERCEPTORS, useClass:RequestInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
