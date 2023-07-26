import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherIconComponent } from './feather-icon/feather-icon.component';
import { CustomFeatherComponent } from './custom-feather/custom-feather.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    FeatherIconComponent,
    CustomFeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbProgressbarModule,


    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
