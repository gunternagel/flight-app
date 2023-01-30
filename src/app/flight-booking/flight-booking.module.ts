import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { StatusFilterPipe } from './status-filter.pipe';
import { FlightService } from './flight.service';
import { DefaultFlightService } from './default-flight.service';

@NgModule({
  imports: [
    //CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    StatusFilterPipe
  ],
  providers:[
    { provide: FlightService, useClass: DefaultFlightService }
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
