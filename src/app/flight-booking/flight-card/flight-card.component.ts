import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, OnChanges } from '@angular/core';
import { NgClass, NgStyle, JsonPipe } from '@angular/common';
import { Flight } from '../flight';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent implements OnInit, OnChanges {

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

  ngOnInit(): void {
    console.debug('ngOnInit', this.item);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('ngOnChanges', this.item);

    if(changes['item']){
      console.debug('ngOnChanges: Item');
    }

    if(changes['selected']){
      console.debug('ngOnChanges: selected');
    }
  }
}
