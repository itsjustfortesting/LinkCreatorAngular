import {Agent} from './agent.model';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';

@Injectable()
export class AgentService {
  public agentChanged = new Subject<Agent>();
  private activeAgent: Agent;

  public portalCodeChanged = new Subject<string>();
  private portalCodeNow = '';

  getActiveAgent(): Agent {
    return this.activeAgent;
  }

  setActiveAgent(value: Agent) {
    this.activeAgent = value;
    this.agentChanged.next(this.activeAgent);
  }

  setPortalCodeNow(value: string) {
    this.portalCodeNow = value;
    this.portalCodeChanged.next(this.portalCodeNow);
  }
}
