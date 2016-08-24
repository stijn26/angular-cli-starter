import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Http, HTTP_PROVIDERS } from '@angular/http';

const appRoutes: Routes  = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [
  Http,
  HTTP_PROVIDERS
];

export const routing = RouterModule.forRoot(appRoutes);
