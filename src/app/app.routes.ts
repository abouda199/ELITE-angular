// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

import { Age46Component } from './pages/ages/age46/age46.component';
import { Age710Component } from './pages/ages/age710/age710.component';
import { Age1113Component } from './pages/ages/age1113/age1113.component';
import { Age1315Component } from './pages/ages/age1315/age1315.component';
import { Age1618Component } from './pages/ages/age1618/age1618.component';
import { DescriptionComponent } from './description/description.component'; // page d'accueil
import { ClubComponent } from './club/club.component';


export const routes: Routes = [
  { path: '', component: DescriptionComponent }, // Page d'accueil
  { path: 'ages/4-6', component: Age46Component },
  { path: 'ages/7-10', component: Age710Component },
  { path: 'ages/11-13', component: Age1113Component },
  { path: 'ages/13-15', component: Age1315Component },
  { path: 'ages/16-18', component: Age1618Component },
  { path: 'contact', component: ContactComponent },
  { path: 'club', component: ClubComponent },


  { path: '**', redirectTo: '' } // Redirection vers accueil si route inconnue
];
