import { Component, OnChanges, DoCheck } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnChanges {
    inputTitle = '';
    todos: any[] = []

    constructor(public todoService: TodoService) {
        this.todos = this.todoService.todos;
    }


    ngDoCheck(): void {
        console.log("check was detected");
        this.todos = this.todoService.todos;
    }

    ngOnChanges(): void {
        console.log("change was detected");
    }
    addHandler(todoName: string) {

        this.todoService.add(todoName);

    }
    deleteTodo(index) {
        //this.todos = [...this.todos.slice(0, index), ...this.todos.slice(index + 1)]
        this.todoService.remove(index);
    }
}
