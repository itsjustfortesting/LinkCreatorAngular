import {Component, OnDestroy, OnInit} from '@angular/core';
import {Link} from '../link.model';
import {LinkService} from '../link.service';
import {Subscription} from 'rxjs/Subscription';
import {AgentService} from '../../agent/agent.service';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit, OnDestroy {
  linkList: Link[];
  linkListSubscription: Subscription;
  portalCodeChangedSubscription: Subscription;
  selectedLinksSubscription: Subscription;
  portalCodeNotNull: boolean;
  selectedLinksNotEmpty: boolean;

  constructor(private linkService: LinkService, private agentService: AgentService) {
  }

  ngOnInit() {
    this.linkListSubscription = this.linkService.linkListUpdate.subscribe(
      (link: Link[]) => {
        this.linkList = link;
      }
    );
    this.portalCodeChangedSubscription = this.agentService.portalCodeChanged.subscribe(
      (portalCodeNow: string) => {
        portalCodeNow !== '' ? this.portalCodeNotNull = true : this.portalCodeNotNull = false;
      }
    );
    this.linkService.selectedLinksUpdate.subscribe(
      (link: Link[]) => {
        link.length > 0 ? this.selectedLinksNotEmpty = true : this.selectedLinksNotEmpty = false;
      }
    );
    this.linkList = this.linkService.getLinkList();
    this.agentService.getActiveAgent().portalCode !== '' ? this.portalCodeNotNull = true : this.portalCodeNotNull = false;
    this.linkService.getSelectedLinks().length > 0 ? this.selectedLinksNotEmpty = true : this.selectedLinksNotEmpty = false;
  }

  ngOnDestroy() {
    this.linkListSubscription.unsubscribe();
    this.portalCodeChangedSubscription.unsubscribe();
    this.selectedLinksSubscription.unsubscribe();
  }

}
