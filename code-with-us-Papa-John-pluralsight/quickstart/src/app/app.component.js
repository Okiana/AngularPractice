"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.customer = {
            id: 1,
            name: 'Alex Smith',
            address: {
                city: 'Anytown',
                region: 'East',
                state: 'California',
                street: 'Any street'
            }
        };
        this.hideAddress = false;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n      <h1>{{customer.name}}</h1>\n      <p><i> {{customer.name}} is on the {{customer.address.street}} street in {{customer.address.city}} city \n      in region {{customer.address.region}} in state {{customer.address.state}}</i></p>\n      <br/>\n\n      <fieldset>\n      <label>Name: </label> <input [(ngModel)]=\"customer.name\"/>\n      </fieldset>\n    \n      <label><input type=\"checkbox\" [(ngModel)]=\"hideAddress\" />Show/Hide Address</label> \n      <div [hidden]=\"hideAddress\">\n        <fieldset>\n        <label>Street: </label> <input [(ngModel)]=\"customer.address.street\"/>\n        </fieldset>\n        <fieldset>\n        <label>City: </label> <input [(ngModel)]=\"customer.address.city\"/>\n        </fieldset>\n        <fieldset>\n        <label>State: </label>\n        <select [(ngModel)]=\"customer.address.state\">\n        <option>California</option>\n        <option>Kolorado</option>\n        <option>Quebek</option>\n      </select> \n      </fieldset>\n        <fieldset>\n          <label>Region: </label>\n          <select [(ngModel)]=\"customer.address.region\">\n          <option>East</option>\n          <option>North</option>\n          <option>West</option>\n          <option>South</option>\n        </select> \n        </fieldset>\n      </div>\n    ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map