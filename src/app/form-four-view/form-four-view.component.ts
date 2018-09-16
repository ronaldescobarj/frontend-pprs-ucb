import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-four-view',
  templateUrl: './form-four-view.component.html',
  styleUrls: ['./form-four-view.component.css']
})
export class FormFourViewComponent implements OnInit {

  qualificationOptions: any[] = [];
  observation: string;
  totalScore: number = 0;
  scores: any[] = [];
  constructor() { }

  ngOnInit() {
    this.initializeQualificationOptions();
  }

  initializeQualificationOptions() {
    this.qualificationOptions.push({ name: "Nada: 0", value: 0 });
    this.qualificationOptions.push({ name: "Poco: 0.5", value: 0.5 });
    this.qualificationOptions.push({ name: "Regular: 1", value: 1 });
    this.qualificationOptions.push({ name: "Mucho: 2", value: 2 });
  }

  qualify(e: number, index: any) {
    this.scores[index] = e;
    this.totalScore = 0;
    this.scores.forEach((e: any) => {
      this.totalScore += parseFloat(e);
    })
  }
}
