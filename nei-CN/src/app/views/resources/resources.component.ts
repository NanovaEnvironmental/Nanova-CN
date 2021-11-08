import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GAS_CHROMATOGRAPHY_RESOURCE, MEMS, PID, RESOUCES_BG, SPECTROSCOPY_RESOURCE, TECH_BG } from 'src/app/constants';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit {
  bgImg1 = RESOUCES_BG;
  bgImg2 = TECH_BG;
  bgImg: any;
  memsImg = MEMS;
  pidImg = PID;
  headerTitle: any;
  headerContent:any;
  resources: any;
  showContent = true;
  showSensor = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const resource = params.get("resource");
      if (resource === "gas") {
        this.headerInit();
        this.resources = GAS_CHROMATOGRAPHY_RESOURCE;
        
      } else if (resource === "spectroscopy") {
        this.headerInit();
        this.resources = SPECTROSCOPY_RESOURCE;
      } else if (resource === "sensor-technology") {
        this.showContent = false;
        this.showSensor = true;
        this.bgImg = this.bgImg2;
        this.headerTitle = "微通道流体PID";
        this.headerContent = "基于 MEMS 的专利技术可提供更高的精度和更好的分辨率。"
      } 
    })
  }

  headerInit() {
    this.showContent = true;
    this.showSensor = false;
    this.bgImg = this.bgImg1;
    this.headerTitle = "资源";
    this.headerContent = "在此处查找和下载有关我们任何产品的材料。";
  }

}
