import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    public todos: any[] = [];
    constructor() {

    }
    add(todoName: string) {
        this.todos = [
            ...this.todos,
            {
                title: todoName,
                completed: false
            }];
    }
    remove(index) {
        this.todos.splice(index, 1);
        // this.todos = [...this.todos.slice(0, index), ...this.todos.slice(index + 1)]
    }
}
