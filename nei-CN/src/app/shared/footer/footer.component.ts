import { Component, OnInit } from '@angular/core';
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


  constructor() { }

  ngOnInit(): void {
  }

}
