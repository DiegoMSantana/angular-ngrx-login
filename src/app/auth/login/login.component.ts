import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from "rxjs/operators";
import { noop, Subscription} from "rxjs";

import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { login } from '../auth.actions';
import { AuthState } from '../reducers';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;
  private subs: Subscription = new Subscription;
  
  constructor(private auth:AuthService, private store:Store<AuthState>) { }
  
  ngOnInit(): void {
    this.formInit();
  }
  
  
  submit(){
    
    this.subs = this.auth.login(this.loginForm.value.email, this.loginForm.value.password).pipe(
      tap(user => {

        console.log(user);
        this.store.dispatch(login({user}));
       
      })).subscribe(
          noop,
          () => alert("Um erro ocorreu ao tentar realizar o login!")
    ); 
  }
  
  formInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('diego@diego.com', [Validators.required, Validators.email]),
      password: new FormControl('123456', [Validators.required, Validators.minLength(6)])
    });
    
  }
  
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
