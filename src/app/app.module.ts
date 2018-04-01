import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {SystemModule} from './system/system.module';
import {InfoMoikaService} from './shared/services/InfoMoika.service';
import {OrderService} from './shared/services/order.service';
import {ReviewsService} from './shared/services/reviews.service';
import {TimeService} from './shared/services/time.service';
import {AuthModule} from './auth/auth.module';
import {SystemAdminModule} from './system-admin/system-admin.module';
import {FormsModule} from '@angular/forms';
import {UsersService} from './shared/services/users.service';
import {AuthService} from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    SystemModule,
    AuthModule,
    SystemAdminModule,
    FormsModule
  ],
  providers: [
    InfoMoikaService,
    OrderService,
    ReviewsService,
    TimeService,
    UsersService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
