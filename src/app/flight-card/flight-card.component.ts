import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent {

  @Input() item: Flight | null = null;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  select(){
    this.selected = true;
    this.selectedChange.emit(true);
  }

  deselect(){
    this.selected = false;
    this.selectedChange.emit(false);
  }
}
