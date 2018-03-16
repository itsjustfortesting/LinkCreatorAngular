import {Component, Input, OnInit} from '@angular/core';
import {LinkService} from '../../link.service';
import {Link} from '../../link.model';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() linkId;
  link: Link;

  constructor(private linkService: LinkService) {
  }

  ngOnInit() {
    this.link = this.linkService.getLink(this.linkId);
  }

}
