import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from './date/date.component';
import { CityPipe } from './city.pipe';
import { CityService } from './city.service';
import { StatusColorPipe } from './status-color.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    DateComponent,
    CityPipe,
    StatusColorPipe
  ],
  exports: [
    DateComponent,
    CityPipe,
    StatusColorPipe
  ]
})
export class SharedModule { }
