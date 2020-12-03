import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { NbLayoutModule, 
          NbMenuModule,
          NbSidebarModule,
          NbIconModule,
          NbStepperModule,
          NbCardModule,
          NbButtonModule,
          NbUserModule } from '@nebular/theme';
import {PagesRoutingModule} from './pages-routing.module';
import { CoordinadorComponent } from './coordinador/coordinador.component';
import { PublicadorComponent } from './publicador/publicador.component';

@NgModule({
  declarations: [UsuariosComponent, PagesComponent, CoordinadorComponent, PublicadorComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbLayoutModule,
    NbMenuModule,
    NbSidebarModule,
    NbIconModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbUserModule
  ]
})
export class PagesModule { }
