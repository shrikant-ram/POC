import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { ListPageComponent } from './list-page/list-page.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component'
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, ListPageComponent, PageTitleComponent, AddVehicleComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule

  ],
  entryComponents:[AddVehicleComponent],
  exports:[HeaderComponent, FooterComponent, SidebarComponent, ListPageComponent, PageTitleComponent, AddVehicleComponent]
})
export class ExtraModule { }
