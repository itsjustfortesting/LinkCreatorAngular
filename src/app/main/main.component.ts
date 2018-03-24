import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Agent} from '../shared/agent.model';
import {SharedService} from '../shared/shared.service';
import {Subscription} from 'rxjs/Subscription';
import {AgentService} from '../shared/agent.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  agent: Agent = null;
  showLinkListComponentSubscription: Subscription;
  showLinkListComponent = false;

  constructor(private agentService: AgentService, private sharedService: SharedService, private router: Router) {
  }

  ngOnInit() {
    // Get active agent
    this.agent = this.agentService.getActiveAgent();

    // Subscribe to showLinkListComponent value
    this.showLinkListComponentSubscription = this.sharedService.showLinkListComponentChanged.subscribe(
      (value: boolean) => {
        this.showLinkListComponent = value;
      }
    );
    this.showLinkListComponent = this.sharedService.getLinkListComponent();
  }

  ngOnDestroy() {
    this.showLinkListComponentSubscription.unsubscribe();
    this.router.navigate(['/find-agent']);
  }
}
