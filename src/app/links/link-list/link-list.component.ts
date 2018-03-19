import {Component, OnInit} from '@angular/core';
import {Link} from '../link.model';
import {LinkService} from '../link.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  linkList: Link[];
  linkListSubscription: Subscription;

  constructor(private linkService: LinkService) {
  }

  ngOnInit() {
    this.linkListSubscription = this.linkService.linkListUpdate.subscribe(
      (link: Link[]) => {
        this.linkList = link;
      }
    );
    this.linkList = this.linkService.getLinkList();
  }

}
