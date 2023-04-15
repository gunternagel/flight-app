import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})

export class FlightSearchComponent implements OnInit{

  from = '';
  to = '';

  module = {
    from : '',
    to: ''
  };

  flights: Array<Flight> = [];
  selectedFlight: Flight | null = null;
  basket: { [key:number]: boolean} = {
    3: true,
    5: true
  };

  delayFilter = false;

  date: string = (new Date).toISOString();

  constructor( private flightService: FlightService) {
    this.module.from = 'Hamburg';
    this.module.to = 'Graz';
  }

  ngOnInit(): void {
    this.delayFilter = false;
  }

  search() :void {

    this.flightService.find(this.module.from, this.module.to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (err: any) => {
        console.error('Error', err);
      }
    });
  }

  select(f: Flight) {
    this.selectedFlight = f;
  }
}
