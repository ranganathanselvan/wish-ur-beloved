import { certificationDetails } from '../_models/certificationDetails';
import { Injectable } from '@angular/core';
import { workInfo } from '../_models/workInfo';

@Injectable({ providedIn: "root" })
export class WorkInfoService {
  private workInfo: workInfo[] = [
    new workInfo("", "", "", "", "", ""),
  ];

  getWorkInfo() {
    return this.workInfo.slice(1);
  }

  addWorkInfo(detail: workInfo) {
    this.workInfo.push(detail);
  }

  deleteWorkInfo(index: number) {
    this.workInfo.splice(index + 1, 1);
  }
}