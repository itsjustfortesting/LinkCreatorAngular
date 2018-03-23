import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FindAgentComponent} from './find-agent/find-agent.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';
import {MainComponent} from './main/main.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/find-agent', pathMatch: 'full'},
  {path: 'find-agent', component: FindAgentComponent},
  {path: 'main', component: MainComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
