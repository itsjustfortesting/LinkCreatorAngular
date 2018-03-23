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
  showLinkExportComponentSubscription: Subscription;
  showLinkExportComponent = false;
  showLinkListComponentSubscription: Subscription;
  showLinkListComponent = false;

  constructor(private agentService: AgentService, private sharedService: SharedService, private router: Router) {
  }

  ngOnInit() {
    // Get active agent
    this.agent = this.agentService.getActiveAgent();

    // Subscribe to showLinkExportComponent value
    this.showLinkExportComponentSubscription = this.sharedService.showLinkExportComponentChanged.subscribe(
      (value: boolean) => {
        this.showLinkExportComponent = value;
      }
    );
    this.showLinkExportComponent = this.sharedService.getLinkExportComponent();

    // Subscribe to showLinkListComponent value
    this.showLinkListComponentSubscription = this.sharedService.showLinkListComponentChanged.subscribe(
      (value: boolean) => {
        this.showLinkListComponent = value;
      }
    );
    this.showLinkListComponent = this.sharedService.getLinkListComponent();
  }

  ngOnDestroy() {
    this.showLinkExportComponentSubscription.unsubscribe();
    this.showLinkListComponentSubscription.unsubscribe();
    this.router.navigate(['/find-agent']);
  }
}
