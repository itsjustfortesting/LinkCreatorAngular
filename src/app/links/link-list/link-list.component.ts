import {Component, OnDestroy, OnInit} from '@angular/core';
import {LinkService} from '../link.service';
import {Link} from '../link.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit, OnDestroy {
  linkList: Link[];
  linkListSubscription: Subscription;

  constructor(private linkService: LinkService) {
  }

  ngOnInit() {
    this.linkListSubscription = this.linkService.linkListUpdate.subscribe(
      (links: Link[]) => {
        this.linkList = links;
      }
    );
    this.linkList = this.linkService.getLinkList();
  }

  ngOnDestroy() {
    this.linkListSubscription.unsubscribe();
  }

}
