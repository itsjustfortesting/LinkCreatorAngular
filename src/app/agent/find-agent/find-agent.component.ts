import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-find-agent',
  templateUrl: './find-agent.component.html',
  styleUrls: ['./find-agent.component.css']
})
export class FindAgentComponent implements OnInit {
  defaultIdType = 'ag';
  @ViewChild('findAgentForm') findAgentForm: NgForm;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmitFindAgent() {
    console.log(this.findAgentForm.value.idvalue);
    console.log(this.findAgentForm.value.idtype);
  }
}
