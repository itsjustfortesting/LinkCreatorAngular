import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {LinkService} from '../../link.service';
import {Link} from '../../link.model';
import {AgentService} from '../../../agent/agent.service';
import {Subscription} from 'rxjs/Subscription';
import {Agent} from '../../../agent/agent.model';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit, OnDestroy {
  @Input() linkId;
  link: Link;
  portalCodeChangedSubscription: Subscription;
  finalUrl = '';
  @ViewChild('linkCheckBox') linkCheckBox: NgModel;

  constructor(private linkService: LinkService, private agentService: AgentService) {
  }

  ngOnInit() {
    this.link = this.linkService.getLink(this.linkId);
    this.portalCodeChangedSubscription = this.agentService.portalCodeChanged.subscribe(
      (portalCode: string) => {
        this.finalUrl = this.resolveUrl(this.link.url, portalCode, this.agentService.getActiveAgent());
      }
    );
    this.finalUrl = this.resolveUrl(this.link.url, this.agentService.getActiveAgent().portalCode, this.agentService.getActiveAgent());
  }

  ngOnDestroy(): void {
    this.portalCodeChangedSubscription.unsubscribe();
  }

  resolveUrl(url: string, portalCode: string, agent: Agent) {
    let finalUrl = url;
    finalUrl = finalUrl.replace('<#portalCode#>', portalCode);
    finalUrl = finalUrl.replace('<#agSymbol#>', agent.agSymbol);
    finalUrl = finalUrl.replace('<#taxNumber#>', agent.taxNumber.toString());
    return finalUrl;
  }

  onLinkCheckbox() {
    const linkToExport = new Link(this.link.lob, this.link.variant, this.finalUrl);
    if (this.linkCheckBox.value === true) {
      this.linkService.addSelectedLink(linkToExport);
    } else {
      this.linkService.removeSelectedLink(linkToExport);
    }
  }
}
