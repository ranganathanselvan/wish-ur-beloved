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
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(sessionStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(email: string, pass: string) {
    const params = new HttpParams({
      fromObject: {
        grant_type: 'password',
        username: email,
        password: pass,
      },
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    return this.http.post<any>(`api/token`, params, httpOptions).pipe(
      map((result) => {
        if (result && result.access_token) {
          sessionStorage.setItem('token', result.access_token);
        }

        return result;
      })
    );
  }

  userDetails(email: string) {
    const opts = { params: new HttpParams({ fromString: 'email=' + email }) };

    return this.http.get<any>(`api/account/getuserbyemail`, opts).pipe(
      map((result) => {
        if (result) {
          const user = new User();
          user.firstName = result['FirstName'];
          user.lastName = '';
          user.email = email;
          user.phone = 0;
          user.password = '';

          sessionStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return result;
      })
    );
  }

  logout() {
    // remove user data from local storage for log out
    sessionStorage.removeItem('currentUser');
    sessionStorage.removeItem('token');
    this.currentUserSubject.next(null);
  }
}
