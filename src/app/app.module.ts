import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomProductListModule } from "./products/custom-product-list.module";
import { SpartacusModule } from './spartacus/spartacus.module';
import { WeatherReportModule } from "./weather-report/weather-report.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CustomProductListModule,
    WeatherReportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
