import { Component, OnInit } from '@angular/core';
import { workInfo } from 'src/app/_models/workInfo';
import { WorkInfoService } from 'src/app/_services/portfolio-workinfo.services';

@Component({
  selector: 'app-portfolio-work-info',
  templateUrl: './work-info.component.html',
  styleUrls: ['./work-info.component.css']
})
export class WorkInfoComponent implements OnInit {

  works: workInfo[];

  constructor(private workService : WorkInfoService) { }
  proName: string;
  designation:string;
  from:string;
  to: string;
  proDesc: string;
  roles:any;
  

  ngOnInit() {
    this.works = this.workService.getWorkInfo();
   
  }

  addWorkInfo(){
    if(this.proName.length>0){
    const newCert = new workInfo(this.proName,this.designation,this.from,this.to,this.proDesc,this.roles);
    this.workService.addWorkInfo(newCert);
    this.works = this.workService.getWorkInfo();
    this.proName='';
    this.designation='';
    this.from='';
    this.to='';
    this.proDesc='';
    this.roles= '';
    }
  }
  delWorkInfo(index){
    this.workService.deleteWorkInfo(index);
    this.works = this.workService.getWorkInfo();
  }

}
