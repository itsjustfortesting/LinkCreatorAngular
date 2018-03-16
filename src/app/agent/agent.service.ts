import {Agent} from './agent.model';

export class AgentService {
  private activeAgent: Agent;


  getActiveAgent(): Agent {
    return this.activeAgent;
  }

  setActiveAgent(value: Agent) {
    this.activeAgent = value;
  }
}
