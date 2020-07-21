import { Skills } from './Skills';
import { WorkInfo } from './workinfo';
import { Certification } from './certification';

export class Portfolio {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  shortDiscription: string;
  longDiscription: string;
  skills: Array<Skills>;
  workInfo: Array<WorkInfo>;
  certifications: Array<Certification>;
  createdOn: Date;
}
