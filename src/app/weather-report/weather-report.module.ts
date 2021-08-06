import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherReportComponent } from './weather-report.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [WeatherReportComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        CMSWeatherReport: {
          component: WeatherReportComponent,
        }
      },
    } as CmsConfig),
  ]
})
export class WeatherReportModule { }
