import { Skills } from './Skills';
import { WorkInfo } from './workinfo';
import { Certification } from './certification';
import { Awards } from './awards';
import { Languages } from './languages';

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
  awards:Array<Awards>;
  languages:Array<Languages>;
  createdOn: Date;
}
