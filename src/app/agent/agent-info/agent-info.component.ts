import {Component, OnDestroy, OnInit} from '@angular/core';
import {AgentService} from '../agent.service';
import {Agent} from '../agent.model';
import {Subscription} from 'rxjs/Subscription';
import {LinkService} from './links/link.service';
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
  showLinkExportComponentSubscription: Subscription;
  showLinkExportComponent = false;
  portalCodeValue = '';
  showLinks = false;

  constructor(private agentService: AgentService, private linksService: LinkService, private sharedService: SharedService, private router: Router) {
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

    // Get portal code value only if agent is selected
    if (this.agentService.getActiveAgent() != null) {
      this.portalCodeValue = this.agentService.getActiveAgent().portalCode;
    }

    // Subscribe to showLinkExportComponent value
    this.showLinkExportComponentSubscription = this.sharedService.showLinkExportComponentChanged.subscribe(
      (value: boolean) => {
        this.showLinkExportComponent = value;
      }
    );
    this.showLinkExportComponent = this.sharedService.getLinkExportComponent();
  }

  onAgentsInfoFormSubmit() {
    this.showLinks = true;
  }

  onReset() {
    this.agentSubscription.unsubscribe();
    this.router.navigate(['/find-agent']);
    this.agentService.setActiveAgent(null);
  }

  ngOnDestroy() {
    this.agentSubscription.unsubscribe();
    this.showLinkExportComponentSubscription.unsubscribe();
  }
}
