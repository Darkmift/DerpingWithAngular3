import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs-compat/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private goals = new BehaviorSubject<any>(localStorage.getItem('lifeGoals') ? JSON.parse(localStorage.getItem('lifeGoals')) : []);
  goal = this.goals.asObservable();
  constructor() { }
  changeGoal(goal) {
    localStorage.setItem("lifeGoals", JSON.stringify(goal));
    //this.goals.next(goal);
  }
}
