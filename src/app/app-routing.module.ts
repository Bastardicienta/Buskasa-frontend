import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  {path:'', redirectTo:'app-root', pathMatch:'full'},
  {path:"principal", component: PrincipalComponent},
  {path:"login", component: LoginComponentComponent},
  {path:'**', redirectTo:'app-root', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
