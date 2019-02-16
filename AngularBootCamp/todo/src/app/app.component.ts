import { Component } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    todos = [];
    addHandler(value: string) {
        this.todos.push(value);
    }
}