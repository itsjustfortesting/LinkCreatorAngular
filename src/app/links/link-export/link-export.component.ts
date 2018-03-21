import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {LinkService} from '../link.service';
import {Link} from '../link.model';

@Component({
  selector: 'app-link-export',
  templateUrl: './link-export.component.html',
  styleUrls: ['./link-export.component.css']
})
export class LinkExportComponent implements OnInit, OnDestroy {
  selectedLinksSubscription: Subscription;
  selectedLinks: Link[];

  constructor(private linksService: LinkService) {
  }

  ngOnInit() {
    this.selectedLinksSubscription = this.linksService.selectedLinksUpdate.subscribe(
      (links: Link[]) => {
        this.selectedLinks = links;
      }
    );
    this.selectedLinks = this.linksService.getSelectedLinks();
  }

  ngOnDestroy() {
    this.selectedLinksSubscription.unsubscribe();
  }
}
