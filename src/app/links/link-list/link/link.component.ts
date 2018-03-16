import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LinkService} from '../../link.service';
import {Link} from '../../link.model';
import {AgentService} from '../../../agent/agent.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit, OnDestroy {
  @Input() linkId;
  link: Link;
  portalCodeChangedSubscription: Subscription;
  portalCode = '';

  constructor(private linkService: LinkService, private agentService: AgentService) {
  }

  ngOnInit() {
    this.portalCodeChangedSubscription = this.agentService.portalCodeChanged.subscribe(
      (portalCode: string) => {
        this.portalCode = portalCode;
      }
    );
    this.link = this.linkService.getLink(this.linkId);
    this.portalCode = this.agentService.getActiveAgent().portalCode;
  }

  ngOnDestroy(): void {
    this.portalCodeChangedSubscription.unsubscribe();
  }
}
