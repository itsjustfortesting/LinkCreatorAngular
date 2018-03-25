import {Component, OnDestroy, OnInit} from '@angular/core';
import {LinkService} from './link.service';
import {Link} from './link.model';
import {Subscription} from 'rxjs/Subscription';
import {ExportLink} from './exportLink.model';
import {AgentService} from '../../shared/agent.service';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit, OnDestroy {
  linkList: Link[];
  linkListSubscription: Subscription;
  dataLoaded = false;
  showSubmitButton = true;
  showLinkPreview = false;
  exportLinkList: ExportLink[] = [];
  portalCodeValueChangedSubscription: Subscription;
  portalCodeValue = '';

  constructor(private linkService: LinkService, private agentService: AgentService) {
  }

  ngOnInit() {
    // Subscribe to list of links
    this.linkListSubscription = this.linkService.linkListUpdate.subscribe(
      (links: Link[]) => {
        this.linkList = links;
        this.dataLoaded = true;
      }
    );
    this.linkService.getLinkList();

    // Subscribe to change of portal code
    this.portalCodeValueChangedSubscription = this.agentService.portalCodeValueChanged.subscribe(
      (portalCode: string) => {
        this.portalCodeValue = portalCode;
        this.onCheckboxChange();
      }
    );
  }

  onCheckboxChange() {
    this.showLinkPreview = false;
    this.exportLinkList.splice(0, this.exportLinkList.length);

    for (let link of this.linkList) {
      if (link.selected === true) {
        this.showLinkPreview = true;
        let url = link.url;
        url = url.replace('<#portalCode#>', this.portalCodeValue);
        url = url.replace('<#agSymbol#>', this.agentService.getActiveAgent().agSymbol);
        url = url.replace('<#taxNumber#>', this.agentService.getActiveAgent().taxNumber.toString());
        this.exportLinkList.push(new ExportLink(link.variant, url));
      }
    }
  }

  onLinkListSubmit() {
    this.showSubmitButton = false;
  }

  ngOnDestroy() {
    this.linkListSubscription.unsubscribe();
    this.exportLinkList.splice(0, this.exportLinkList.length);
  }

}
