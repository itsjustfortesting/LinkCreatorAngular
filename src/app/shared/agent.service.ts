import {Agent} from './agent.model';
import {Subject} from 'rxjs/Subject';
import {Injectable} from '@angular/core';

@Injectable()
export class AgentService {
  private activeAgent: Agent;
  public agentChanged = new Subject<Agent>();
  private portalCodeValue: string;
  public portalCodeValueChanged = new Subject<string>();


  getActiveAgent(): Agent {
    return this.activeAgent;
  }

  setActiveAgent(value: Agent) {
    this.activeAgent = value;
    this.agentChanged.next(this.activeAgent);
  }

  getPortalCodeValue() {
    return this.portalCodeValue;
  }

  setPortalCodeValue(portalCode: string) {
    this.portalCodeValue = portalCode;
    this.portalCodeValueChanged.next(this.portalCodeValue);
  }
}
