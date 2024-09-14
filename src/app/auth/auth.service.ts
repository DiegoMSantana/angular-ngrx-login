import { Injectable } from '@angular/core';
import { User } from './login/model/user.model';

import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http:HttpClient) { }

  login(email:string, password:string): Observable<User> {
    
    //return this.http.post<User>('/api/login', {email,password});
    /*return new Observable(observ => {
      observ.next();
    });*/
    
    const obj: User = {id: '1', email: "diego@diego.com", password: "123456"};
    return of(obj);
}

}
