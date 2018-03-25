import {Component, OnDestroy, OnInit} from '@angular/core';
import {AgentService} from '../../shared/agent.service';
import {Agent} from '../../shared/agent.model';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {SharedService} from '../../shared/shared.service';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrls: ['./agent-info.component.css']
})
export class AgentInfoComponent implements OnInit, OnDestroy {
  agent: Agent;
  agentSubscription: Subscription;
  portalCodeValue = '';

  constructor(private agentService: AgentService, private sharedService: SharedService, private router: Router) {
  }

  ngOnInit() {
    // Subscribe and get active agent
    this.agentSubscription = this.agentService.agentChanged.subscribe(
      (agent: Agent) => {
        this.agent = agent;
        this.portalCodeValue = agent.portalCode;
      }
    );
    this.agent = this.agentService.getActiveAgent();
    this.portalCodeValue = this.agentService.getActiveAgent().portalCode;

    this.agentService.setPortalCodeValue(this.portalCodeValue);
  }

  onChangePortalCodeValue() {
    this.agentService.setPortalCodeValue(this.portalCodeValue);
  }

  onAgentsInfoFormSubmit() {
    this.sharedService.setLinkListComponent(true);
  }

  onReset() {
    this.router.navigate(['/find-agent']);
  }

  ngOnDestroy() {
    this.agentSubscription.unsubscribe();
    this.agentService.setActiveAgent(null);
  }
}
