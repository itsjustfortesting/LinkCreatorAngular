import {Component, OnInit} from '@angular/core';
import {AgentService} from '../agent.service';

@Component({
  selector: 'app-agent-info',
  templateUrl: './agent-info.component.html',
  styleUrls: ['./agent-info.component.css']
})
export class AgentInfoComponent implements OnInit {
  agentFound = false;

  constructor(private agentService: AgentService) {
  }

  ngOnInit() {

  }
}
