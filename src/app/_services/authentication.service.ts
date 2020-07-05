import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, pass: string, fname :string) {
    const params = new HttpParams({
      fromObject: {
        grant_type: 'password',
        username: email,
        password: pass
      }
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this.http.post<any>(`api/token`, params, httpOptions)
      .pipe(map(result => {
        if (result && result.access_token) {
          const user = new User();
          user.firstName = fname;
          user.lastName = '';
          user.email = email;
          user.phone = 0;
          user.password = pass;

          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('token', result.access_token);
          this.currentUserSubject.next(user);
        }

        return result;
      }));
  }

  logout() {
    // remove user data from local storage for log out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
