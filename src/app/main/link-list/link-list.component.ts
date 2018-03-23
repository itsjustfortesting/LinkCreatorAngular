import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {LinkService} from '../../shared/link.service';
import {Link} from '../../shared/link.model';
import {Subscription} from 'rxjs/Subscription';
import {NgForm} from '@angular/forms';
import {SharedService} from '../../../../shared/shared.service';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit, OnDestroy {
  linkList: Link[];
  linkListSubscription: Subscription;
  dataLoaded = false;
  selectedLinks: boolean[] = [];
  showSubmitButton = true;
  @ViewChild('linkListForm') linkListForm: NgForm;

  constructor(private linkService: LinkService, private sharedService: SharedService) {
  }

  ngOnInit() {
    // Subscribe to list of links
    this.linkListSubscription = this.linkService.linkListUpdate.subscribe(
      (links: Link[]) => {
        this.linkList = links;

        // Check if selection array is empty
        if (this.linkService.getSelectedLinks().length === 0) {
          // Pre-populate link selection array
          for (let i = 0; i < links.length; i++) {
            this.selectedLinks.push(false);
          }
          // Send array to service
          this.linkService.connectSelectedLinksArrays(this.selectedLinks);
        }
        // Show loaded links
        this.dataLoaded = true;
      }
    );
    this.linkService.getLinkList();
  }

  onLinkListSubmit() {
    this.showSubmitButton = false;
    this.sharedService.setLinkExportComponent(true);
  }

  ngOnDestroy() {
    this.linkListSubscription.unsubscribe();
  }

}
