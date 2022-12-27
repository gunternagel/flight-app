import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.scss']
})
export class FlightSearchComponent implements OnInit{

  from = 'Hamburg';
  to = 'Graz';
  flights: Array<Flight> = [];
  selectedFlight: Flight | null = null;
  basket: { [key:number]: boolean} = {
    3: true,
    5: true
  };
  http: HttpClient;

  constructor( http: HttpClient) {
    this.http = http;
  }

  ngOnInit(): void {
    this.selectedFlight = this.flights[0];
  }

  search() :void {

    const url = 'http://demo.ANGULARarchitects.io/api/flight';

    const headers = new HttpHeaders().set('Accept', 'application/json');

    const params = new HttpParams().set('from', this.from).set('to', this.to);

    this.http.get<Flight[]>(url, {headers, params}).subscribe({
      next: (flights: Flight[]) => {
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
