import {Component, OnInit} from '@angular/core';
import {Link} from '../link.model';
import {LinkService} from '../link.service';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  linkList: Link[];

  constructor(private linkService: LinkService) {
  }

  ngOnInit() {
    this.linkList = this.linkService.getLinkList();
  }

}
