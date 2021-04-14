import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employe';
  employees: any[];

  constructor() {
    this.employees = [
      { empId: '10001', fname: 'Firoz', lname: 'Khan', dep: 'Web Devloper', city: 'Bengaluru', email: 'khan3firoz@gmail.com' ,dob:"12/01/1999",salary:100000 },
      { empId: '10002', fname: 'Akhlaque', lname: 'Ahmad', dep: 'Web Devloper', city: 'Bengaluru', email: 'akhlaquea01@gmail.com' ,dob:"12/01/1999",salary:100000},
      { empId: '10003', fname: 'Ashfaque', lname: 'Ahmad', dep: 'Data Scientist', city: 'Bengaluru', email: 'ashfaque786@gmail.com',dob:"12/01/1999",salary:100000 },
      { empId: '10004', fname: 'Krishna', lname: 'kumar', dep: 'Mechanical', city: 'Noida', email: 'twariji@gmail.com',dob:"12/01/1999",salary:100000 }
    ]
  }
  addEventHandler(event: any) {
    this.employees.push(event)
  }

  addEmployee() {
    alert('you add a data');
    this.employees.push({ empId: '10004', fname: 'Krishna', lname: 'kumar', dep: 'Mechanical', city: 'Noida', email: 'twariji@gmail.com', dob:"12/01/1999",salary:100000})
  }
}
