import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SharedService {
  private showLinkListComponent = false;
  showLinkListComponentChanged = new Subject<boolean>();

  getLinkListComponent() {
    return this.showLinkListComponent;
  }

  setLinkListComponent(value: boolean) {
    this.showLinkListComponent = value;
    this.showLinkListComponentChanged.next(this.showLinkListComponent);
  }
}
