import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {DirectiveComponent} from './directive/directive.component';
import {
  ErrComponentComponent
} from './err-component/err-component.component';

const routes: Routes = [{
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'directive',
    component: DirectiveComponent
  },
  {
    path: '**',
    component: ErrComponentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
