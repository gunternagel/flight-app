import { Flight } from '../flight';
import { FlightManager } from './flight-manager';


let flights : Array<Flight> = [
  {
    id: 17,
    from: 'Graz',
    to: 'Hamburg',
    date: '2022-02-27T17:00:00+01.00'
  },
  {
    id: 18,
    from: 'Graz',
    to: 'Hamburg',
    date: '2022-02-27T18:00+01.00'
  },
  {
    id: 19,
    from: 'Graz',
    to: 'Mallorca',
    date: '2022-02-27T19:00+01.00'
  },
  {
    id: 20,
    from: 'Graz',
    to: 'Hamburg',
    date: '2022-02-27T20:00+01.00'
  }
];

let fm = new FlightManager(flights);
let result1 = fm.search('Graz', 'Hamburg');

for(let f of result1){
  console.debug('flight', f);
}
