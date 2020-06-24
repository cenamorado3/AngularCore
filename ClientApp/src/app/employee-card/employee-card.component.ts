import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }

}



interface Employee {
  email: string;
  country: string;
  jobTitle: string;
  name: string;
  phone: string;
}
