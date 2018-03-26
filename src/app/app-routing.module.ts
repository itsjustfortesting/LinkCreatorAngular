import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FindAgentComponent} from './find-agent/find-agent.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {MainComponent} from './main/main.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './admin/login/login.component';
import {OptionsComponent} from './admin/options/options.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/find-agent', pathMatch: 'full'},
  {path: 'find-agent', component: FindAgentComponent},
  {path: 'main', component: MainComponent},
  {
    path: 'admin', component: AdminComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'options', component: OptionsComponent}
    ]
  },
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
