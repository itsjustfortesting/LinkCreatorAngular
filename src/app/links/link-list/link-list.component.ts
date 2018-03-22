import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {LinkService} from '../link.service';
import {Link} from '../link.model';
import {Subscription} from 'rxjs/Subscription';
import {NgForm} from '@angular/forms';
import {Checkbox} from '../checkbox.model';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit, OnDestroy {
  linkList: Link[];
  linkListSubscription: Subscription;
  dataLoaded = false;
  showExportComponent = false;
  selectedLinks: Checkbox[] = [];
  @ViewChild('linkListForm') linkListForm: NgForm;

  constructor(private linkService: LinkService) {
  }

  ngOnInit() {
    // Subscribe to list of links
    this.linkListSubscription = this.linkService.linkListUpdate.subscribe(
      (links: Link[]) => {
        this.linkList = links;

        // Pre-populate link selection array
        for (let i = 0; i < links.length; i++) {
          this.selectedLinks.push(new Checkbox('checkbox' + i, false));
        }
        this.dataLoaded = true;
      }
    );
    this.linkService.getLinkList();
  }

  onCheckboxValueChange(linkNo: number) {
    // this.selectedLinks[linkNo].value =
    // console.log(this.linkListForm.)
  }

  onLinkListSubmit() {
    this.showExportComponent = true;
  }

  ngOnDestroy() {
    this.linkListSubscription.unsubscribe();
  }

}
