import { Component, OnInit } from '@angular/core';
import { Awards } from 'src/app/_models/awards';

@Component({
  selector: 'app-portfolio-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  awards: Array<Awards>;
  awardName: string;
  awardNotes: string;

  constructor() { }

  ngOnInit(): void {
    this.awards = new Array<Awards>();
  }

  addAwards() {
    if (this.awardName.length > 0) {
      const awd = new Awards();
      awd.awardName = this.awardName;
      awd.awardNotes = this.awardNotes;
      this.awards.push(awd);
      this.awardName = '';
      this.awardNotes = '';
    }
  }

  delAward(index) {
    if (this.awards.length > 0) {
      this.awards.splice(index, 1);
    }
  }

}
