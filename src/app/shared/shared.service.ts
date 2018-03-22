import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class SharedService {
  private showLinkExportComponent = false;
  showLinkExportComponentChanged = new Subject<boolean>();

  getLinkExportComponent() {
    return this.showLinkExportComponent;
  }

  setLinkExportComponent(value: boolean) {
    this.showLinkExportComponent = value;
    this.showLinkExportComponentChanged.next(this.showLinkExportComponent);
  }
}
