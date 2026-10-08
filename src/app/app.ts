import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // employees = ["Rahul", "Priya", "Johan", "Manu", "Hari"];

  employees = [
     { id: 101, name: 'Ravi', age: 25 },
    { id: 102, name: 'Priya', age: 28 },
    { id: 103, name: 'Rahul', age: 30 }
  ];


  employeeInfo = [
  {
    empId: 101,
    empName: "Ravi",
    empSalary: 51000,
    empLocation: "Hyderabad"
  },
  {
    empId: 102,
    empName: "Priya",
    empSalary: 40000,
    empLocation: "Bengaluru"
  },
  {
    empId: 103,
    empName: "Rahul",
    empSalary: 55000,
    empLocation: "Chennai"
  },
  {
    empId: 104,
    empName: "Manu",
    empSalary: 40000,
    empLocation: "Kurnool"
  }

];
}
