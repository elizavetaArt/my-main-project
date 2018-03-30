import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainComponent} from './main/main.component';
import {ContactComponent} from './contact/contact.component';
import {ServicesComponent} from './services/services.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {OnlineRecordComponent} from './online-record/online-record.component';
import {SystemComponent} from './system.component';
import {MoikaComponent} from './services/moika/moika.component';
import {PolirovkaComponent} from './services/polirovka/polirovka.component';
import {ShinomontazhComponent} from './services/shinomontazh/shinomontazh.component';
import {NanopokrytiyeComponent} from './services/nanopokrytiye/nanopokrytiye.component';
import {AdditionallyComponent} from './services/additionally/additionally.component';
import {DryCleanningComponent} from './services/dry-cleanning/dry-cleanning.component';

const routes: Routes = [
  {
    path: '', component: SystemComponent, children: [
      {path: 'main', component: MainComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'reviews', component: ReviewsComponent},
      {path: 'online-record', component: OnlineRecordComponent},
      {path: 'services/moika', component: MoikaComponent},
      {path: 'services/polirovka', component: PolirovkaComponent},
      {path: 'services/shinomontazh', component: ShinomontazhComponent},
      {path: 'services/nanopokrytiye', component: NanopokrytiyeComponent},
      {path: 'services/dry-cleaning', component: DryCleanningComponent},
      {path: 'services/additionally', component: AdditionallyComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule {
}
