import {Component, OnInit} from '@angular/core';
import {CurrentWeatherService} from "../../services/current-weather.service";
import {RootInterface, Weather} from "../../interfaces/current-weather.interface";

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit{

  weather: Array<Weather> = [];
  cityName = '';
  cloudsNumber = 0
  constructor(private api: CurrentWeatherService) {
  }

  ngOnInit() {
    this.api.get().subscribe((data: RootInterface) => {
      this.cityName = data.name;
      this.cloudsNumber = data.clouds.all;
      this.weather = data.weather;
      console.log(data);
    })
  }
}
