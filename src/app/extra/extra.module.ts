import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ListPageComponent } from './list-page/list-page.component';
import { PageTitleComponent } from './page-title/page-title.component'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, ListPageComponent, PageTitleComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[HeaderComponent, FooterComponent, SidebarComponent, ListPageComponent, PageTitleComponent]
})
export class ExtraModule { }
