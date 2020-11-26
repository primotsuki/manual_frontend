import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
const routes: Routes = [{
        path: '',
        component: PagesComponent,
        children: [
            {path: 'usuarios',
            component: UsuariosComponent
            }
        ]
        }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {
}
