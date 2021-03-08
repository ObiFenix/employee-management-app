import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from '../../environments/environment';
// import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class EmployeeService {

  // private _apiServiceUrl: string = environment.apiBaseUrl;
  //
  // constructor(private _http: HttpClient) { }
  //
  // public getEmployees(): Observable<Employee[]> {
  //   return this._http.get<Employee[]>(`${this._apiServiceUrl}/staff/all`);
  // }
  //
  // public addEmployee(employee: Employee): Observable<Employee> {
  //   return this._http.get<Employee>(`${this._apiServiceUrl}/staff/all/add`, employee);
  // }
  //
  // public updateEmployee(employee: Employee): Observable<Employee> {
  //   return this._http.get<Employee>(`${this._apiServiceUrl}/staff/all/update`, employee);
  // }
  //
  // public deleteEmployee(employeeId: Number): Observable<void> {
  //   return this._http.get<void>(`${this._apiServiceUrl}/staff/all/delete/${employeeId}`);
  // }


  public getEmployees() {
    return [
      {
        active: true,
        batchCode: "8b0a25de-53f0-4864-ab93-92a15915838c",
        branch: "Saint Louis",
        email: "mismael.contractor@hotmail.fr",
        firstName: "Ismael",
        id: 7,
        lastName: "Mbana",
        phone: "+14045077793",
        profileImgUrl: "https://picsum.photos/200/300.jpg",
        role: "UI Developer",
        team: "CDSaints"
      },
      {
        active: false,
        batchCode: "ed72b252-65cc-4f08-b25c-3054fa1f8cdb",
        branch: "Miami",
        email: "gabdula@yahoo.es",
        firstName: "Geremias",
        id: 8,
        lastName: "Abdula",
        phone: "+13132335563",
        profileImgUrl: "https://picsum.photos/id/237/200/300",
        role: "UI Developer",
        team: "Heaters"
      },
      {
        active: true,
        batchCode: "95a3ca1e-7ab8-4f87-8f87-072e86c7a330",
        branch: "Arlington",
        email: "sljackson@ggmail.com",
        firstName: "Samuel L",
        id: 9,
        lastName: "Jackson",
        phone: "+18175563469",
        profileImgUrl: "https://picsum.photos/id/237/200/300",
        role: "Sr Developer",
        team: "Fantastic 4"
      }
    ]
  }

}
