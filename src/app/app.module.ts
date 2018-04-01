import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SystemModule } from './system/system.module';
import { CabinetModule } from './cabinet-system/cabinet-system.module';
import {InfoMoikaService} from './shared/services/InfoMoika.service';
import {OrderService} from './shared/services/order.service';
import {ReviewsService} from './shared/services/reviews.service';
import {TimeService} from './shared/services/time.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SystemModule,
    CabinetModule
  ],
  providers: [
    InfoMoikaService,
    OrderService,
    ReviewsService,
    TimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
