import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CarListComponent } from "./car-list/car-list.component";
import { UserComponent } from './user.component'

const _routes:Routes= [
    {
        path:'', component:UserComponent,
        children:[
            {path:'', component:DashboardComponent},
            {path:'car_list',component:CarListComponent}
        ]
    }
]

export const userRouterModule=RouterModule.forChild(_routes);