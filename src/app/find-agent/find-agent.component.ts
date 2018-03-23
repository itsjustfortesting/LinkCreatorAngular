import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AgentService} from '../shared/agent.service';
import {Agent} from '../shared/agent.model';
import {Router} from '@angular/router';
import {LinkService} from '../shared/link.service';

@Component({
  selector: 'app-find-agent',
  templateUrl: './find-agent.component.html',
  styleUrls: ['./find-agent.component.css']
})
export class FindAgentComponent implements OnInit {
  defaultIdType = 'ag';
  @ViewChild('findAgentForm') findAgentForm: NgForm;

  constructor(private agentService: AgentService, private linkService: LinkService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmitFindAgent() {
    const test: Agent = new Agent('Test agent', '123', 1798173277, 'www.test.pl');
    this.agentService.setActiveAgent(test);
    this.router.navigate(['/main']);
  }
}
