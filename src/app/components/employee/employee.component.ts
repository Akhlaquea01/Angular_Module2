import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
// import * as EventEmitter from 'events';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  @Input()
  employees: any;

  @Output()
  addEvent: EventEmitter<any>;

  // count: Number;

  constructor() {
    this.addEvent = new EventEmitter();
   }

  ngOnInit() {
      console.log('List of the product',this.employees)
  }
  addEmployeeInChildComp() {
    alert('Add employee details')
    this.addEvent.emit({ empId: '10001', fname: 'Firoz', lname: 'Khan', dep: 'Web Devloper', city: 'Bengaluru', email: 'khan3firoz@gmail.com' });
    // triggering an event;
  }}


