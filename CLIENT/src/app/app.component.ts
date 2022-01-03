import { MongoDBService, TestService } from "./services/index";
import { BehaviorSubject } from 'rxjs';
import { TestConnectionResponse, OperationResult } from "./models";
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'onlinefuelsclient';

  testConnectionResponse$!: BehaviorSubject<TestConnectionResponse>;
  uploadResult: Array<any> = [];
  task1Result: Array<any> = [];

  constructor(
    private mongoDBService: MongoDBService,
    private testService: TestService
  ) {}

  ngOnInit() {
    this.testConnectionResponse$ = new BehaviorSubject(new TestConnectionResponse());
  }

  ngOnDestroy() {
    [this.testConnectionResponse$].forEach((subj) => {
      if (subj != null) {
        subj.complete();
      } 
    });
  }  

  checkConnection = ( ) => {
    this.testService.test().subscribe((response: any) =>{
      if (response) {
        if (this.testConnectionResponse$ == null) {
          this.testConnectionResponse$ = new BehaviorSubject<TestConnectionResponse>(new TestConnectionResponse());
        }
  
        this.testConnectionResponse$.next(response);
      }
    }, (error) => {
      console.log(error);
    });
  }

  getTaskResults = (taskId: Number) => {    
    this.mongoDBService.getTaskResults(taskId).subscribe((response:any) => {
      if (response) {
          if (response.status) {
            this.task1Result = JSON.parse(response.message).slice(0, 25);
          }
      }
    });    
  }

  uploadAccountsHandler = (event: any) => {
    if (event && event.files) {
      this.uploadResult = [];
      for(let file of event.files) {
        var collection = file.name.replace(/\.[^/.]+$/, "");
        this.mongoDBService.upload(collection, file).subscribe((response:any) => {
          if (response) {
              this.uploadResult.push({collection, ...response});  
          }    
        });
    }
    }
  }
}
