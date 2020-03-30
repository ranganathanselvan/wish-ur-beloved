import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Array<string>;
  txtskills: string;

  constructor() { }

  ngOnInit(): void {
    this.skills = new Array<string>();
  }

  addSkills() {
    if (this.txtskills.length > 0) {
      this.skills.push(this.txtskills);
      this.txtskills = '';
    }
  }

}
