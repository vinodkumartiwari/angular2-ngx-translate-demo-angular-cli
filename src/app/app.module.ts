import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpModule , Http} from "@angular/http";

import { AppComponent } from './app.component';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, "i18n/", ".json");
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot({  	
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [Http]
        }
      })    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
