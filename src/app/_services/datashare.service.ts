import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../_models';
import { Portfolio } from '../_models/portfolio';

@Injectable()
export class DataShareService {

  private currentUser = new BehaviorSubject<User>(new User());
  storedUser = this.currentUser.asObservable();
  private portfolio = new BehaviorSubject<Portfolio>(new Portfolio());
  storedPortfolio = this.portfolio.asObservable();

  setCurrentUser(value: User) {
    this.currentUser.next(value);
  }

  setPortfolio(value: Portfolio) {
    this.portfolio.next(value);
  }

}
