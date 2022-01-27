import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationMap } from 'src/app/constants';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  application: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let app = params.get("app"); 
      this.application = ApplicationMap[app!];
    })

    window.scroll({
      top: 0, 
      left: 0, 
      behavior: 'smooth'
    });
  }
}
