import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SharedService {
  private showLinkExportComponent = false;
  showLinkExportComponentChanged = new Subject<boolean>();
  private showLinkListComponent = false;
  showLinkListComponentChanged = new Subject<boolean>();

  getLinkExportComponent() {
    return this.showLinkExportComponent;
  }

  setLinkExportComponent(value: boolean) {
    this.showLinkExportComponent = value;
    this.showLinkExportComponentChanged.next(this.showLinkExportComponent);
  }

  getLinkListComponent() {
    return this.showLinkListComponent;
  }

  setLinkListComponent(value: boolean) {
    this.showLinkListComponent = value;
    this.showLinkListComponentChanged.next(this.showLinkListComponent);
  }
}
