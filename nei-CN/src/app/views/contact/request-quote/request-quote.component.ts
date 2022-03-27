import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { REQUEST_QUOTE_BG } from 'src/app/constants';

@Component({
  selector: 'app-request-quote',
  templateUrl: './request-quote.component.html',
  styleUrls: ['../contact.component.scss']
})
export class RequestQuoteComponent implements OnInit {
  bgImg = REQUEST_QUOTE_BG;
  url= 'http://localhost:8080/api/email';
  quoteForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    company: new FormControl(''),
    comment: new FormControl(''),
    NovaTestP100: new FormControl(false),
    DV3000: new FormControl(false),
    SATIRV80: new FormControl(false),
    SATIRV90: new FormControl(false)
  })

  constructor(private https: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const info = '用户: ' + this.quoteForm.controls.username.value + `\n`
                + '邮箱: ' + this.quoteForm.controls.email.value + `\n`
                + '电话: ' + this.quoteForm.controls.phone.value + `\n`
                + '公司: ' + this.quoteForm.controls.company.value + `\n`
                + 'NovaTestP100: ' + this.quoteForm.controls.NovaTestP100.value + `\n`
                + 'DV3000: ' + this.quoteForm.controls.DV3000.value + `\n`
                + 'SATIRV80: ' + this.quoteForm.controls.SATIRV80.value + `\n`
                + 'SATIRV90: ' + this.quoteForm.controls.SATIRV90.value + `\n`
                + '留言: ' + this.quoteForm.controls.comment.value + `\n`;

    this.https.get(`${this.url}/${info}`).subscribe(
      () => {
        this.quoteForm.reset();
      }
    );
  }

}
