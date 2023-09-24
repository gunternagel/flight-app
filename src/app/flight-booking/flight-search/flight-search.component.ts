import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { FlightService } from '../flight.service';
import { FlightClass } from '../flight-class';
import { LuggageOptions } from '../luggage-options';

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

  nonstop: boolean = false;

  // Auswahl
  flightClasses: FlightClass[] = [
    { id: 1, name: '1st Class' },
    { id: 2, name: 'Business Class '},
    { id: 3, name: 'Economy Class '}
  ];

  // tatsächlich ausgewählte Klasse mit Standardwert
  flightClass = this.flightClasses[2];

  // Auswahl
  luggageOptions: LuggageOptions[] = [
    { id: 0, name: 'No luggage' },
    { id: 1, name: '1 piece of luggage' },
    { id: 2, name: '2 pieces of luggage' }
  ];

  // tatsächlich ausgewählte Option mit Standardwerten
  luggage = this.luggageOptions[2];

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
