import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <h1>{{name}}</h1>
      <p><i> {{name}} is on the {{street}} street in {{city}} city in region {{region}}</i></p>
      <br/>

      <fieldset>
      <label>Name: </label> <input [(ngModel)]="name"/>
      </fieldset>
    
      <label><input type="checkbox" [(ngModel)]="hideAddres" />Show/Hide Address</label> 
      <div [hidden]="hideAddress">
        <fieldset>
        <label>Street: </label> <input [(ngModel)]="street"/>
        </fieldset>
        <fieldset>
        <label>City: </label> <input [(ngModel)]="city"/>
        </fieldset>
        <fieldset>
          <label>Region: </label>
          <select [(ngModel)]="region">
          <option>East</option>
          <option>North</option>
          <option>West</option>
          <option>South</option>
        </select> 
        </fieldset>
      </div>
    `,
})
export class AppComponent  { 
  
  name = 'Alex Smith';
  image = 'favicon.ico';
  color = 'red'; 

  hideAddress = false;
  street = 'AngularStreet'; 
  city ='AngularCity';
  region ='West';

  addressClick(){
    this.hideAddress = !this.hideAddress;
  }
}
