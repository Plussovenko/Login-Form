import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SuccessService {
  constructor(private router: Router) {}
  setAdmin(info: string) {
    localStorage.setItem('info', info);
  }
  getAdmin() {
    return localStorage.getItem('info');
  }
  isLogged() {
    return this.getAdmin() !== null;
  }
  //Прочесть/ найти видосы больше про Observable
  logIn(userInfo: {
    email: string;
    password: string;
  }): Observable<string | boolean> {
    if (
      userInfo.email === 'admin@gmail.com' &&
      userInfo.password === 'admin123'
    ) {
      this.setAdmin('1111111111');
      return of(true);
    }
    return throwError(() => new Error('U made a grave mistake, pls try again'));
  }
}
