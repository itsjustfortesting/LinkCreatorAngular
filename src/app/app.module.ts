import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {FindAgentComponent} from './agent/find-agent/find-agent.component';
import {AgentInfoComponent} from './agent/agent-info/agent-info.component';
import {FormsModule} from '@angular/forms';
import {AgentService} from './agent/agent.service';


@NgModule({
  declarations: [
    AppComponent,
    FindAgentComponent,
    AgentInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule
  ],
  providers: [AgentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
