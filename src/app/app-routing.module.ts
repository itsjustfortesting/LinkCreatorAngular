import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FindAgentComponent} from './agent/find-agent/find-agent.component';
import {AgentInfoComponent} from './agent/agent-info/agent-info.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/find-agent', pathMatch: 'full'},
  {path: 'find-agent', component: FindAgentComponent},
  {path: 'agent-info', component: AgentInfoComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
