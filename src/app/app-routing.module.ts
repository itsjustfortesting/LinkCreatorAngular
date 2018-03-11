import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AgentsComponent} from './links/agents/agents.component';

const appRoutes: Routes = [
  {path: '', component: AgentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
