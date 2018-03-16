import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AgentService} from '../agent.service';
import {Agent} from '../agent.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-agent',
  templateUrl: './find-agent.component.html',
  styleUrls: ['./find-agent.component.css']
})
export class FindAgentComponent implements OnInit {
  defaultIdType = 'ag';
  @ViewChild('findAgentForm') findAgentForm: NgForm;

  constructor(private agentService: AgentService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmitFindAgent() {
    const test: Agent = new Agent('Test agent', '123', 1798173277, 'www.test.pl');
    this.agentService.setActiveAgent(test);
    this.router.navigate(['/agent-info']);
  }
}
