import { Component, OnInit } from '@angular/core';
import { certificationDetails } from 'src/app/_models/certificationDetails';
import { CertificationService } from 'src/app/_services/portfolio-certifications.service';

@Component({
  selector: 'app-portfolio-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  
  
  certificates: certificationDetails[];

  constructor(private certService : CertificationService) { }
  name: string;
  id:string;
  issuer:string;
  validFrom: string;
  validTill: string;
  notes: string;
  

  ngOnInit() {
    this.certificates = this.certService.getCertificates();
   
  }

  addCert(){
    if(this.name.length>0){
    const newCert = new certificationDetails(this.name,this.id,this.issuer,this.validFrom,this.validTill,this.notes);
    this.certService.addCertificate(newCert);
    this.certificates = this.certService.getCertificates();
    this.name='';
    this.id='';
    this.issuer='';
    this.validFrom='';
    this.validTill='';
    this.notes='';
    }
  }
  delCert(index){
    this.certService.deleteCertificate(index);
    this.certificates = this.certService.getCertificates();
  }

}
