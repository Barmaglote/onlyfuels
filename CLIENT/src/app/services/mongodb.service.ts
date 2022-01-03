import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OperationResult } from '../models/operationResult';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class MongoDBService {
  private apiUrl: string;

  private get controllerAPIUrl(): string {
    return `${this.apiUrl}`;
  }

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  upload(collection: string, data: File): Observable<OperationResult> {      
    return this.postFile(`${this.controllerAPIUrl}/upload/${collection}`, data);
  }

  getTaskResults(taskId: Number): Observable<any> {
    return this.http.get<any>(`${this.controllerAPIUrl}/task/${taskId}`);
  }   

  private postFile(url: string, data: any): Observable<any> {
    const options = {
      headers: this.getHeaders(),
      responseType: "json" as "json"
    };

    return this.http.post(url, data, options);
  }

  private getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }  
}
