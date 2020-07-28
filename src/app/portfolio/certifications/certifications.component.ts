import { Component, OnInit } from '@angular/core';
import { Certification } from 'src/app/_models/certification';


@Component({
  selector: 'app-portfolio-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  
  
  certificates: Certification[];
  name: string;
  id:string;
  issuer:string;
  validFrom: string;
  validTill: string;
  notes: string;

  /*constructor(private certService : CertificationService) { }
  name: string;
  id:string;
  issuer:string;
  validFrom: string;
  validTill: string;
  notes: string;*/

  constructor(){}
  

  ngOnInit() {
    this.certificates = new Array<Certification>();
   
  }

  addCert(){
    if(this.name.length>0){
    const newCert = new Certification();
    //this.certService.addCertificate(newCert);
    //this.certificates = this.certService.getCertificates();
    newCert.certificationName = this.name;
    newCert.certificationId = this.id;
    newCert.issuedBy = this.issuer;
    newCert.validFrom = this.validFrom;
    newCert.validTill = this.validTill;
    newCert.additionalNotes = this.notes;
    this.certificates.push(newCert);
    this.name='';
    this.id='';
    this.issuer='';
    this.validFrom='';
    this.validTill='';
    this.notes='';
    
    }
  }
  delCert(index){
   
    if (this.certificates.length > 0) {
      this.certificates.splice(index, 1);
    }
    // this.certService.deleteCertificate(index);
    // this.certificates = this.certService.getCertificates();
  }

}
