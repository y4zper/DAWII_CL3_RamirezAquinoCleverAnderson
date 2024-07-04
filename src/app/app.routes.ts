import { Routes } from '@angular/router';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { HomeComponent } from './preguntas/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocationComponent } from './preguntas/location/location.component';
import { TodosComponent } from './preguntas/todos/todos.component';

export const routes: Routes = [

    {path: "preguntas", component: PreguntasComponent,
        children: [
            {path: "location", component: LocationComponent},
            {path: "todos", component: TodosComponent},
            {path: "Home", component: HomeComponent}
        ]
    },

    {path: "", redirectTo: "preguntas", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}

    
];
