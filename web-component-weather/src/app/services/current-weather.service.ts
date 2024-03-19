import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  constructor(private httpClient: HttpClient) { }

  get(): Observable<any> {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=Medellin&appid=bb24676df5515d8e7ed2eb840659b999`)
  }
}
