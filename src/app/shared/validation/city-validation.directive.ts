import { Directive, Input } from '@angular/core';

import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  // Selektor aktualisieren
  selector: 'input[appCity]',

  // Provider eintragen, um die Validierungsregel
  // beim aktuellen Eingabefeld zu registrieren:
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidationDirective,
      multi: true
    }
  ]
})
export class CityValidationDirective implements Validator {

  @Input() appCity = '';

  constructor() { }

  public validate(c: AbstractControl): ValidationErrors | null {

    const allowedCities = this.appCity.split(',');

    if(allowedCities.includes(c.value)) {
      return null;
    }

    return {
      appCity: {
        reason: 'Requested Airport is currently not available',
        allowedCities,
        tryAgain: 2031
      }
    };
  }
}
