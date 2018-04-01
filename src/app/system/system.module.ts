import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { OnlineRecordComponent } from './online-record/online-record.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ServicesComponent } from './services/services.component';
import { FormComponent } from './online-record/form/form.component';
import { AdditionallyComponent } from './services/additionally/additionally.component';
import { DryCleanningComponent } from './services/dry-cleanning/dry-cleanning.component';
import { MoikaComponent } from './services/moika/moika.component';
import { NanopokrytiyeComponent } from './services/nanopokrytiye/nanopokrytiye.component';
import { PolirovkaComponent } from './services/polirovka/polirovka.component';
import { ShinomontazhComponent } from './services/shinomontazh/shinomontazh.component';
import { TableMoikaComponent } from './services/moika/table-moika/table-moika.component';
import {InfoMoikaService} from '../shared/services/InfoMoika.service';
import { FormPolirovkaComponent } from './services/polirovka/form-polirovka/form-polirovka.component';
import { FormCleanningComponent } from './services/dry-cleanning/form-cleanning/form-cleanning.component';
import { FormNanopokrytiyeComponent } from './services/nanopokrytiye/form-nanopokrytiye/form-nanopokrytiye.component';
import { FormAdditionallyComponent } from './services/additionally/form-additionally/form-additionally.component';
import { EditReviewComponent } from './reviews/edit-review/edit-review.component';
import { AddReviewsComponent } from './reviews/add-reviews/add-reviews.component';
import {ReviewsService} from '../shared/services/reviews.service';
import {TimeService} from '../shared/services/time.service';
import {OrderService} from '../shared/services/order.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ],
  declarations: [
    SystemComponent,
    ContactComponent,
    OnlineRecordComponent,
    PortfolioComponent,
    ReviewsComponent,
    ServicesComponent,
    FormComponent,
    MainComponent,
    AdditionallyComponent,
    DryCleanningComponent,
    MoikaComponent,
    NanopokrytiyeComponent,
    PolirovkaComponent,
    ShinomontazhComponent,
    TableMoikaComponent,
    FormPolirovkaComponent,
    FormCleanningComponent,
    FormNanopokrytiyeComponent,
    FormAdditionallyComponent,
    EditReviewComponent,
    AddReviewsComponent
  ],
  providers: [InfoMoikaService, ReviewsService, TimeService, OrderService]
})

export class SystemModule {}
