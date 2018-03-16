import {Agent} from './agent.model';
import {Subject} from 'rxjs/Subject';

export class AgentService {
  agentChanged = new Subject<Agent>();
  private activeAgent: Agent;

  getActiveAgent(): Agent {
    return this.activeAgent;
  }

  setActiveAgent(value: Agent) {
    this.activeAgent = value;
    this.agentChanged.next(this.activeAgent);
  }
}
