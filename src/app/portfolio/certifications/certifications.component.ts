import { Component, OnInit } from '@angular/core';
import { Certification } from 'src/app/_models/certification';

@Component({
  selector: 'app-portfolio-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {


  certificates: Array<Certification>;
  name: string;
  id: string;
  issuer: string;
  validFrom: string;
  validTill: string;
  notes: string;

  constructor() { }

  ngOnInit() {
    this.certificates = new Array<Certification>();
  }

  addCert() {
    if (this.name.length > 0) {
      const cert = new Certification();
      cert.certificationName = this.name;
      cert.certificationId = this.id;
      cert.issuedBy = this.issuer;
      cert.validFrom = this.validFrom;
      cert.validTill = this.validTill;
      cert.additionalNotes = this.notes;
      this.certificates.push(cert);
      this.name = '';
      this.id = '';
      this.issuer = '';
      this.validFrom = '';
      this.validTill = '';
      this.notes = '';
    }
  }
  delCert(index) {
    if (this.certificates.length > 0) {
      this.certificates.splice(index, 1);
    }
  }

}
