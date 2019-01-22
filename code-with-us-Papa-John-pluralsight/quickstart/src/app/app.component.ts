import { Component } from '@angular/core';

import { Customer } from './module'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css']

})
export class AppComponent  { 
  
  customer: Customer = {
    id: 1,
    name: 'Alex Smith',
    address: {
      city: 'Anytown',
      region: 'East',
      state: 'California',
      street: 'Any street'
    }
  }

  hideAddress = false;
}
