import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { GotyComponent } from './pages/goty/goty.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'firebase-goty', component: GotyComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];
