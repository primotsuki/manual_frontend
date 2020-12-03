import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { AuthService } from '../auth/auth-service';

@Component({
    selector: 'ngx-pages',
    styleUrls: ['pages.component.scss'],
    templateUrl: './pages.component.html',
})
export class PagesComponent {

    constructor(private authService: AuthService,
                private router: Router) {

    }
    menu: NbMenuItem[] = [
        {
            title: 'Inicio',
            icon: 'home-outline',
            link: '/pages/dashboard'
        },{
            title: 'Administrador',
            icon: 'email-outline',
            link: '/pages/usuarios',
            hidden: (this.getRol()!=1)
        },{
            title: 'Coordinador',
            icon: 'inbox-outline',
            link: '/pages/coordinador',
            hidden: (this.getRol()!=1)
        },{
            title: 'Publicador',
            icon: 'folder-outline',
            link: '/pages/publicador',
            hidden: (this.getRol()!=1)
        }
    ];

    logout(){
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
    getRol(){
        return this.authService.currentUserValue.user_info.rol_id;
    }
}
