import {Injectable} from '@angular/core';
import {Link} from './link.model';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class LinkService {
  private linkList: Link[] = [
    new Link('TRAVEL', 'http://ble.pl'),
    new Link('TRAVEL', 'http://bleblabfsd.pl'),
    new Link('HEALTH', 'http://zdrowotne.pl')
  ];
  linkListUpdate = new Subject<Link[]>();

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
}
