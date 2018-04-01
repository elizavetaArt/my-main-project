import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CabinetSystemComponent} from './cabinet-system.component';

const routes: Routes = [
  {
    path: '', component: CabinetSystemComponent, children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CabinetSystemRoutingModule {}
