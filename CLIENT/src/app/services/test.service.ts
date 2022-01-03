import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestConnectionResponse } from "../models";

import { environment } from 'src/environments/environment';

@Injectable()
export class TestService {
  private apiUrl: string;

  private get controllerAPIUrl(): string {
    return `${this.apiUrl}/`;
  }

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  test(): Observable<TestConnectionResponse> {      
    return this.http.get<TestConnectionResponse>(`${this.controllerAPIUrl}test`);
  }
}
