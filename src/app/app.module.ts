import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopProviderButComponent } from './top-provider-but.component';
import { ProvidersService } from './providers.service';

@NgModule({
  declarations: [
    AppComponent,
    TopProviderButComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProvidersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
