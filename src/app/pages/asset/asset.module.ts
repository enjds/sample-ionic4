import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssetPageRoutingModule } from './asset-routing.module';

import { AssetPage } from './asset.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    AssetPageRoutingModule
  ],
  declarations: [AssetPage]
})
export class AssetPageModule {}
