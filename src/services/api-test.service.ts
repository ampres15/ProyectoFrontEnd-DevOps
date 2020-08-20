import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiTestService {

  //apiURL: string = 'http://localhost:/api';
  apiURL: string = 'https://cdbgsbdes.pronaca.com/api';

  constructor(private httpClient: HttpClient) { }

  public createUser(user: User){
    return this.httpClient.post(`${this.apiURL}/createUser/`, user);
  }
}
