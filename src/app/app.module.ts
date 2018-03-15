import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {FindAgentComponent} from './agent/find-agent/find-agent.component';
import {AgentInfoComponent} from './agent/agent-info/agent-info.component';


@NgModule({
  declarations: [
    AppComponent,
    FindAgentComponent,
    AgentInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
