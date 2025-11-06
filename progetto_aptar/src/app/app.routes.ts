import { Routes } from '@angular/router';
import { ElencaProdotti } from './components/elenca-prodotti/elenca-prodotti';
import { DettaglioProdott } from './components/dettaglio-prodott/dettaglio-prodott';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "elenca",
        pathMatch: "full"
    },
    {
        path:'elenca',
        component: ElencaProdotti
    },
    {
        path:'dettaglio/:codice',
        component: DettaglioProdott
    }
];
