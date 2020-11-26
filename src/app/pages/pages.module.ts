import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { NbLayoutModule, NbMenuModule,NbSidebarModule,NbIconModule } from '@nebular/theme';
import {PagesRoutingModule} from './pages-routing.module';

@NgModule({
  declarations: [UsuariosComponent, PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbLayoutModule,
    NbMenuModule,
    NbSidebarModule,
    NbIconModule
  ]
})
export class PagesModule { }
