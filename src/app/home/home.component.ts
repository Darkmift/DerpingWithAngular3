import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger, state } from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(':enter', stagger('300ms', [
          animate(800, keyframes([
            style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: .3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ]))]), { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  // itemCount: number = 4;
  itemCount;
  btnText: string = 'Add an item';
  goalText: string = 'My first life goal';
  goals: string[] = localStorage.getItem('lifeGoals') ? JSON.parse(localStorage.getItem('lifeGoals')) : [];
  errorText: string = '';
  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    if (this.goalText.length > 1) {
      this.goals.push(this.goalText);
      localStorage.setItem("lifeGoals", JSON.stringify(this.goals));
      this.errorText = '';
    } else {
      this.errorText = `input empty!!`;
    }

    this.goalText = '';
    this.itemCount = this.goals.length;
  }

}