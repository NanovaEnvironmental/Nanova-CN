import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }

}
