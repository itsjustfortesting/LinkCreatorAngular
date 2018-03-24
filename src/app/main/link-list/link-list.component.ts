import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {LinkService} from './link.service';
import {Link} from './link.model';
import {Subscription} from 'rxjs/Subscription';
import {NgForm} from '@angular/forms';

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
  showLinkPreview = false;
  @ViewChild('linkListForm') linkListForm: NgForm;

  constructor(private linkService: LinkService) {
  }

  ngOnInit() {
    // Subscribe to list of links
    this.linkListSubscription = this.linkService.linkListUpdate.subscribe(
      (links: Link[]) => {
        this.linkList = links;
        this.dataLoaded = true;

        // Prepopulate selected links array
        for (let i = 0; i < this.linkList.length; i++) {
          this.selectedLinks.push(false);
        }
      }
    );
    this.linkService.getLinkList();
  }

  onCheckboxChange() {
    console.log(this.isAnyLinkSelected());
  }

  isAnyLinkSelected() {
    let isSelected = false;
    for (const links of this.selectedLinks) {
      if (links === true) {
        isSelected = true;
      }
    }
    return isSelected;
  }

  onLinkListSubmit() {
    this.showSubmitButton = false;
  }

  ngOnDestroy() {
    this.linkListSubscription.unsubscribe();
  }

}
