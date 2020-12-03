import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  private currentUser: Observable<any>;

  constructor(
    private http: HttpClient
  ) { 
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public login(user: any){
    return this.http.post<any>(`${environment.apiUrl}/auth/login`, user)
    .pipe(map(user =>{
      console.log(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user
    }))
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }
  public logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
