import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { CoordinadorComponent } from './coordinador/coordinador.component';
import { PublicadorComponent } from './publicador/publicador.component';
import { DocenteComponent } from './docente/docente.component';
import { KardexComponent } from './kardex/kardex.component';
    import { from } from 'rxjs';
const routes: Routes = [{
        path: '',
        component: PagesComponent,
        children: [
            {path: 'usuarios',
            component: UsuariosComponent
            },{
                path: 'coordinador',
                component: CoordinadorComponent
            },{
                path: 'publicador',
                component: PublicadorComponent
            },{
                path:'docente',
                component: DocenteComponent
            },{
                path:'kardex',
                component: KardexComponent
            }
        ]
        }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
