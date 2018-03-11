import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgentsComponent} from './agents/agents.component';

@NgModule({
  declarations: [
    AgentsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // AgentsComponent
  ]
})
export class LinksModule { }
