import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '../layout/layout.module';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { DigimonComponent } from './digimon/digimon.component';
import { SobreComponent } from './digimon/sobre/sobre.component';
import { DialogSobreComponent } from './digimon/sobre/dialog-sobre/dialog-sobre.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [
    HomeComponent,
    StartComponent,
    DigimonComponent,
    SobreComponent,
    DialogSobreComponent,
  ],
  imports: [CommonModule, RouterModule, LayoutModule, UiModule],
  exports: [HomeComponent, StartComponent],
})
export class FeatureModule {}
