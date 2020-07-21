import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/_models/Skills';

@Component({
  selector: 'app-portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Array<Skills>;
  txtskills: string;

  constructor() { }

  ngOnInit(): void {
    this.skills = new Array<Skills>();
  }

  addSkills() {
    if (this.txtskills.length > 0) {
      const sks = new Skills();
      sks.skillName = this.txtskills;
      this.skills.push(sks);
      this.txtskills = '';
    }
  }

  removeSkill(index) {
    if (this.skills.length > 0) {
      this.skills.splice(index, 1);
    }
  }

}
