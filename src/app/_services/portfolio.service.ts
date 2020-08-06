import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Portfolio } from '../_models/portfolio';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Skills } from '../_models/Skills';
import { WorkInfo } from '../_models/workinfo';
import { Certification } from '../_models/certification';


@Injectable({ providedIn: 'root' })
export class PortfolioService {
  constructor(private http: HttpClient) { }

  createPortfolio(portfolio: Portfolio) {
    return this.http.post<Portfolio>(`api/portfolio/createportfolio`, portfolio);
  }

  updatePortfolio(portfolio: Portfolio) {
    return this.http.post<Portfolio>(`api/portfolio/updateportfolio`, portfolio);
  }

  getPortfolio(email: string) {
    return this.http.get<any>(`/api/portfolio/getbyemail/${email}`)
      .pipe(map(
        (result) => {
          const obj = new Portfolio();
          obj.id = result.Id;
          obj.firstName = result.FirstName;
          obj.lastName = result.LastName;
          obj.email = result.Email;
          obj.mobile = result.Mobile;
          obj.shortDiscription = result.ShortDiscription;
          obj.longDiscription = result.LongDiscription;

          const ArraySkills = new Array<Skills>();
          result.Skills.forEach(element => {
            const skills = new Skills();
            skills.skillName = element.SkillName;
            ArraySkills.push(skills);
          });
          obj.skills = ArraySkills;

          const ArrayWorkInfo = new Array<WorkInfo>();
          result.WorkInfo.forEach(element => {
            const workInfo = new WorkInfo();
            workInfo.companyName = element.CompanyName;
            workInfo.role = element.Role;
            workInfo.startDate = element.StartDate;
            workInfo.endDate = element.EndDate;
            workInfo.experienceInYearMonth = element.ExperienceInYearMonth;
            workInfo.isCurrentCompany = element.isCurrentCompany;
            ArrayWorkInfo.push(workInfo);
          });
          obj.workInfo = ArrayWorkInfo;

          const ArrayCertification = new Array<Certification>();
          result.WorkInfo.forEach(element => {
            const certi = new Certification();
            certi.certificationName = element.CertificationName;
            certi.certificationId = element.CertificationId;
            certi.issuedBy = element.IssuedBy;
            certi.validFrom = element.ValidFrom;
            certi.validTill = element.ValidTill;
            certi.additionalNotes = element.AdditionalNotes;
            ArrayCertification.push(certi);
          });
          obj.certifications = ArrayCertification;

          return obj;
        })
      );
  }
}
