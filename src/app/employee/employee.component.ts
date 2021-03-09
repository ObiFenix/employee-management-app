import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Employee} from './employee';
import {EmployeeService} from './employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  employee: Employee | undefined;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService
      .getEmployees()
      .subscribe(
        (response: Employee[]) => {
          this.employees = response;
        },
        (error: HttpErrorResponse) => console.log(`Error Message: ${error.message}`)
      );
  }

  public onAddEmployee(addForm: NgForm): void {
    const addSEmployeeSubmitBtn: HTMLElement = document.getElementById('add-employee-btn')!;
    addSEmployeeSubmitBtn.click();

    this.employeeService
      .addEmployee(addForm.value)
      .subscribe(
        (response: any) => {
          console.log(response);
          addForm.reset();
          this.getEmployees();
        },
        (error: HttpErrorResponse) => console.log(`Error Message: ${error.message}`)
      );
  }

  public onUpdateEmployee(employee: Employee): void {
    console.log(employee);
    this.employeeService
      .updateEmployee(employee)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.getEmployees();
        },
        (error: HttpErrorResponse) => console.log(`Error Message: ${error.message}`)
      );
  }

  public onDeleteEmployee(employeeId: Number): void {
    this.employeeService
      .deleteEmployee(employeeId)
      .subscribe(
        (response: void) => {
          console.log(response);
          this.getEmployees();
        },
        (error: HttpErrorResponse) => alert(error.message)
      );
  }

  public searchEmployees(key: string): void {
    this.employees = this.employees.filter(employee =>
      employee.firstName.toLowerCase().includes(key.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(key.toLowerCase())||
      employee.email.toLowerCase().includes(key.toLowerCase())
    );

    if (this.employees.length === 0 || !key) {
      this.getEmployees();
    }
  }

  public onOpenModal(employee: any, modalId: string): void {
    const modalParentWrapper: HTMLElement = document.getElementById('main-container')!;
    const modalInputWrapper: HTMLElement = document.createElement('input');

    this.employee = employee;

    modalInputWrapper.setAttribute('type', 'button')
    modalInputWrapper.setAttribute('style', 'display: none')
    modalInputWrapper.setAttribute('data-toggle', 'modal');
    modalInputWrapper.setAttribute('data-target', `#${modalId}`);
    modalParentWrapper.appendChild(modalInputWrapper);
    modalInputWrapper.click();
  }

}
