import {Injectable} from '@angular/core';
import {Link} from './link.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LinkService {
  private linkList: Link[] = [
    new Link('TRAVEL', 'Bezpieczne podróże', 'http://www.signal-iduna.pl/bpd?portal_code=<#portalCode#>&ag_symbol=<#agSymbol#>&tax_number=<#taxNumber#>'),
    new Link('TRAVEL', 'Koszt imprezy turystycznej', 'http://www.signal-iduna.pl/kit?portal_code=<#portalCode#>&ag_symbol=<#agSymbol#>&tax_number=<#taxNumber#>'),
    new Link('HEALTH', 'Moja Pełnia zdrowia', 'http://www.signal-iduna.pl/mpz?portal_code=<#portalCode#>&ag_symbol=<#agSymbol#>&tax_number=<#taxNumber#>')
  ];
  linkListUpdate = new Subject<Link[]>();
  private selectedLinks: Link[] = [];
  selectedLinksUpdate = new Subject<Link[]>();

  getLinkList() {
    return this.linkList.slice();
  }

  getLink(index: number) {
    return this.linkList[index];
  }

  setLinkList(linkList: Link[]) {
    this.linkList = linkList;
    this.linkListUpdate.next(this.linkList.slice());
  }

  addSelectedLink(link: Link) {
    this.selectedLinks.push(link);
    this.selectedLinksUpdate.next(this.selectedLinks.slice());
  }

  removeSelectedLink(link: Link) {
    this.selectedLinks.splice(this.selectedLinks.lastIndexOf(link), 1);
    this.selectedLinksUpdate.next(this.selectedLinks.slice());
  }

  getSelectedLinks() {
    return this.selectedLinks.slice();
  }

  clearSelectedLinks() {
    this.selectedLinks = null;
    this.selectedLinksUpdate.next(this.selectedLinks.slice());
  }

}
