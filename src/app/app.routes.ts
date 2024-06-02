import { Routes } from '@angular/router';
import { WorksComponent } from './pages/works/works.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: WorksComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
