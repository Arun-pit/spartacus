import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  public getWeatherReports(city){
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=cfc8840f889e61b7a919c3c638fed1cd&units=metric`);
  }
}
