import { Component, OnInit } from '@angular/core';
import { EVENTS, NEWS_EVENT_BG} from 'src/app/constants';

@Component({
  selector: 'app-news-and-events',
  templateUrl: './news-and-events.component.html',
  styleUrls: ['./news-and-events.component.scss']
})
export class NewsAndEventsComponent implements OnInit {
  bgImg = NEWS_EVENT_BG;
  events = EVENTS;

  constructor() { }

  ngOnInit(): void {

    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
    
  }

}
