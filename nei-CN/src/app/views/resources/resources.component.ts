import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RESOUCES_BG, TECH_BG } from 'src/app/constants';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  bgImg1 = RESOUCES_BG;
  bgImg2 = TECH_BG;
  bgImg: any;
  resource: any;
  headerTitle: any;
  headerContent:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getResource();
  }

  getResource() {
    this.route.paramMap.subscribe(params => {
      this.resource = params.get("resource");
      if (this.resource === "sensor-technology") {
        this.bgImg = this.bgImg2;
        this.headerTitle = "微通道流体PID";
        this.headerContent = "基于 MEMS 的专利技术可提供更高的精度和更好的分辨率。"
      } else {
        this.bgImg = this.bgImg1;
        this.headerTitle = "资源";
        this.headerContent = "在此处查找和下载有关我们任何产品的材料。"
      }
    })
  }

}
