import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarListComponent } from './car-list/car-list.component';
import { userRouterModule } from './user-routing'
import { ExtraModule } from '../extra/extra.module'
import { UserComponent } from './user.component';

@NgModule({
  declarations: [DashboardComponent, CarListComponent, UserComponent],
  imports: [
    CommonModule,
    userRouterModule,
    ExtraModule
  ]
})
export class UserModule { }
