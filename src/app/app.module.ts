import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {FindAgentComponent} from './find-agent/find-agent.component';
import {AgentInfoComponent} from './main/agent-info/agent-info.component';
import {FormsModule} from '@angular/forms';
import {AgentService} from './shared/agent.service';
import {LinkListComponent} from './main/link-list/link-list.component';
import {LinkService} from './shared/link.service';
import {SharedService} from './shared/shared.service';
import {MainComponent} from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FindAgentComponent,
    AgentInfoComponent,
    LinkListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule
  ],
  providers: [AgentService, LinkService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
