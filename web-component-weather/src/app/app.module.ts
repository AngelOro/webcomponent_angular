import {ApplicationRef, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import {HttpClientModule} from "@angular/common/http";
import {createCustomElement} from "@angular/elements";

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    CurrentWeatherComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) {
    const elementCustom = createCustomElement(
      CurrentWeatherComponent,
      {
        injector: this.injector
      }
      );
    customElements.define('current-weather-widget', elementCustom);
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
    if (document.querySelector('app-root')) {
      appRef.bootstrap(AppComponent);
    }
  }
}
