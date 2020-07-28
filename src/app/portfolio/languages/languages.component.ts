import { Component, OnInit } from '@angular/core';
import { Languages } from 'src/app/_models/languages';

@Component({
  selector: 'app-portfolio-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {
  
  languages: Array<Languages>;
  languageName: string;
  canRead: boolean;
  canWrite:boolean
  canSpeak: boolean;

  constructor() { }

  ngOnInit(): void {
    this.languages = new Array<Languages>();
  }

  addLanguage() {
    if (this.languageName.length > 0) {
      const lan = new Languages();
      lan.language = this.languageName;
      lan.read = this.canRead ?'Read':'';
      lan.write = this.canWrite?'Write':'';
      lan.speak = this.canSpeak?'Speak':'';
      this.languages.push(lan);
      this.languageName = '';
      this.canRead = false;
      this.canWrite = false;
      this.canSpeak = false;

    }
  }

  delLanguage(index) {
    if (this.languages.length > 0) {
      this.languages.splice(index, 1);
    }
  }

}
