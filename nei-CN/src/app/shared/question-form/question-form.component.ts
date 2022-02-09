import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  url: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  // sendEmail() {
  //   this.url = "http://localhost:8080/sendEmail";
  //   this.httpClient.get(this.url, {
  //     responseType: 'text'
  //  }).toPromise().then(function(res) {
  //     console.log(res);
  //   })

  // }

}
