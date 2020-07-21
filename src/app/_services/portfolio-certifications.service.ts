import { certificationDetails } from '../_models/certificationDetails';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class CertificationService {
  private certifications: certificationDetails[] = [
    new certificationDetails("", "", "", "", "", ""),
  ];

  getCertificates() {
    return this.certifications.slice(1);
  }

  addCertificate(detail: certificationDetails) {
    this.certifications.push(detail);
  }

  deleteCertificate(index: number) {
    this.certifications.splice(index + 1, 1);
  }
}