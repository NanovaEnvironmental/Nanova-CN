import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { COPY_RIGHT, FACEBOOK_IMG, LINKEDIN_IMG, LOGO_FOOT, TWITTER_IMG, YOUTUBE_IMG } from 'src/app/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footImg = LOGO_FOOT;
  twitterImg = TWITTER_IMG;
  youTubeImg = YOUTUBE_IMG;
  faceBookImg = FACEBOOK_IMG;
  linkedInImg = LINKEDIN_IMG;
  copyRight = COPY_RIGHT;
  url= 'http://ec2-54-91-217-250.compute-1.amazonaws.com:8083/api/email';
  subscribeForm = new FormGroup({
    useremail: new FormControl('')
  })
  result = "";


  constructor(private https: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const info = this.subscribeForm.controls.useremail.value
    this.https.get(`${this.url}/${info} 订阅了我们`).subscribe();
    this.subscribeForm.reset();
    alert( "订阅成功！");
  }
}
