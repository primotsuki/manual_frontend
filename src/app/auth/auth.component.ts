import { Component } from '@angular/core';

@Component({
    selector: 'ngx-auth',
    template: `
    <nb-layout>
    <nb-layout-column>
    </nb-layout-column>
      <nb-layout-column>
      <router-outlet></router-outlet>
      </nb-layout-column>
      <nb-layout-column>
      </nb-layout-column>
    </nb-layout>
    `,
})
export class AuthComponent {
}
