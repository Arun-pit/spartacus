
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  public weatherReportsSubject: Subject<any> = new Subject<any>();
  public city;
  ngOnInit(): void {
    this.getWeatherReports();
  }
  private getWeatherReports(){
    this.apiService.getWeatherReports('thiruvananthapuram').subscribe(
      (data: any)=>{
        this.filterData(data.list);
        this.city = data.city;
      }
    );
  }
  private filterData(weatherReports){
    var currentTime = new Date().getHours();
    if(currentTime % 3 != 0){
      currentTime = currentTime - (currentTime % 3);
    }
    weatherReports = weatherReports.filter(report => 
      new Date(report.dt_txt).getHours() === currentTime
    );
    this.weatherReportsSubject.next(weatherReports);
  }
}
