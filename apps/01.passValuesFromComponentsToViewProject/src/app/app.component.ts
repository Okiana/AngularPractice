import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  age: number;
  fullName: string;
  status: boolean;
  email: any;
  title = 'Pass Values from Components to View';

  ngOnInit() {
    this.age = 20;
    this.fullName = 'Okiana';
    this.status = true;
    this.email = 'oki@gmail.com';
  }
}
