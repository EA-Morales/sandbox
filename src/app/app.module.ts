import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';

import { FormsModule } from '@angular/forms';

import { UiService } from './services/ui.service';
import { InfoComponent } from './component/info/info.component';
import { ModalComponent } from './component/modal/modal.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, BannerComponent, InfoComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [UiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
