import {Component, OnDestroy, OnInit} from '@angular/core';
import {LinkService} from '../link.service';
import {AgentService} from '../../agent/agent.service';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit, OnDestroy {
  // linkList: Link[];
  // linkListSubscription: Subscription;

  constructor(private linkService: LinkService, private agentService: AgentService) {
  }

  ngOnInit() {
    // this.linkListSubscription = this.linkService.linkListUpdate.subscribe(
    //   (link: Link[]) => {
    //     this.linkList = link;
    //   }
    // );
    // this.linkList = this.linkService.getLinkList();
  }

  ngOnDestroy() {
    // this.linkListSubscription.unsubscribe();
  }

}
