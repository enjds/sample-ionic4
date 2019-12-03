import { Component, OnInit } from '@angular/core';
import { MockService } from '../../services/mock.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.page.html',
  styleUrls: ['./asset.page.scss'],
})
export class AssetPage {
  data$: any;
  constructor(private mock: MockService) { }

  ionViewWillEnter() {
    this.data$ = this.mock.getAssetOverview();
  }

}
