import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrateComponent } from './components/registrate/registrate.component';

const routes: Routes = [
  { path: '', redirectTo: 'registrate', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registrate', component: RegistrateComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
