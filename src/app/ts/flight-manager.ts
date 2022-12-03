import { Flight } from '../flight';

export class FlightManager {

  private cache: Flight[];

  constructor(cache: Flight[]){
    this.cache = cache;
  }

  search(from: string, to: string): Flight[]{
    const result = new Array<Flight>();
    for(let f of this.cache){
      if(f.from === from && f.to === to){
        result.push(f);
      }
    }
    return result;
  }
}
