import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EmployeeService {

  private apiServiceUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServiceUrl}/staff/all`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServiceUrl}/staff/add`, employee);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServiceUrl}/staff/update`, employee);
  }

  deleteEmployee(employeeId: Number): Observable<void> {
    return this.http.delete<void>(`${this.apiServiceUrl}/staff/delete/${employeeId}`);
  }

}
