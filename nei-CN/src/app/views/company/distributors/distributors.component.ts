import { Component, OnInit } from '@angular/core';
import { BUSI_PART_BG } from 'src/app/constants';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['../company.component.scss']
})
export class DistributorsComponent implements OnInit {
  bgImg = BUSI_PART_BG;
  url= 'http://localhost:8080/api/email';
  distriorsForm = new FormGroup({
    username: new FormControl(''),
    company: new FormControl(''),
    email: new FormControl(''),
    website: new FormControl(''),
    comment: new FormControl('')
  })

  constructor(private https: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const info = '用户: ' + this.distriorsForm.controls.username.value + `\n`
                + '公司: ' + this.distriorsForm.controls.company.value + `\n`
                + '邮箱: ' + this.distriorsForm.controls.email.value + `\n`
                + '网站: ' + this.distriorsForm.controls.website.value + `\n`
                + '留言: ' + this.distriorsForm.controls.comment.value + `\n`;

    this.https.get(`${this.url}/${info}`).subscribe(
      () => {
        console.log(console.log(info));
      }
    );

    this.distriorsForm.reset();
  }

}
