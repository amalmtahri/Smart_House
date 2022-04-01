import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,  Routes } from '@angular/router';
import { HouseComponent } from './components/smartHouse/smartHouse.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { GlobalConstants } from './common/global-constants';
import { AuthGuard } from './auth/auth.guard';



const routes: Routes = [
  { path: 'smarthouse', component: HouseComponent},
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
