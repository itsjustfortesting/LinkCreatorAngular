import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import {FindAgentComponent} from './agent/find-agent/find-agent.component';
import {AgentInfoComponent} from './agent/agent-info/agent-info.component';
import {FormsModule} from '@angular/forms';
import {AgentService} from './agent/agent.service';
import {LinkListComponent} from './agent/agent-info/links/link-list/link-list.component';
import {LinkService} from './agent/agent-info/links/link.service';
import {LinkExportComponent} from './agent/agent-info/links/link-export/link-export.component';
import {SharedService} from './shared/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    FindAgentComponent,
    AgentInfoComponent,
    LinkListComponent,
    LinkExportComponent
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
