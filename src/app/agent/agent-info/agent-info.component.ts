import {Component, OnDestroy, OnInit} from '@angular/core';
import {AgentService} from '../agent.service';
import {Agent} from '../agent.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrls: ['./agent-info.component.css']
})
export class AgentInfoComponent implements OnInit, OnDestroy {
  agent: Agent;
  agentSubscription: Subscription;
  portalCodeValue = '';

  constructor(private agentService: AgentService) {
  }

  ngOnInit() {
    this.agentSubscription = this.agentService.agentChanged.subscribe(
      (agent: Agent) => {
        this.agent = agent;
        this.portalCodeValue = agent.portalCode;
      }
    );
    this.agent = this.agentService.getActiveAgent();
    if (this.agentService.getActiveAgent() != null) {
      this.portalCodeValue = this.agentService.getActiveAgent().portalCode;
    }
  }

  ngOnDestroy() {
    this.agentSubscription.unsubscribe();
  }

  onChangePortalCode(value: string) {
    this.agentService.setPortalCodeNow(value);
  }
}
