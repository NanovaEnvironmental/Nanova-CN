import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  url= 'http://ec2-54-91-217-250.compute-1.amazonaws.com:8083/api/email';

  questionForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    comment: new FormControl('')

  });

  constructor(private https: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const info = '用户: ' + this.questionForm.controls.username.value + `\n`
                + '邮箱: ' + this.questionForm.controls.email.value + `\n`
                + '电话: ' + this.questionForm.controls.phone.value + `\n`
                + '留言: ' + this.questionForm.controls.comment.value + `\n`;

    this.https.get(`${this.url}/${info}`).subscribe();
    this.questionForm.reset();
    alert( "您已发送！");
  }
}
