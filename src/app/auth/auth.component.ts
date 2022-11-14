import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";
import { Component } from "@angular/core";
import { AuthResponseData, AuthService } from "./auth.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  constructor(private authService: AuthService, private router:Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    //可以在下方訂閱一次就好
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      resData=> {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    //原始程式邏輯
    // if(this.isLoginMode){
    //   this.authService.login(email,password).subscribe(
    //     resData => {
    //       console.log(resData);
    //       this.isLoading = false;
    //     },
    //     errorMessage => {
    //       console.log(errorMessage);
    //       this.error = errorMessage;
    //       this.isLoading = false;
    //     }
    //   );
    // } else {

    // this.authService.signup(email,password).subscribe(
    //   resData => {
    //     console.log(resData);
    //     this.isLoading = false;
    //   },
    //   errorMessage => {
    //     console.log(errorMessage);
    //     this.error = errorMessage;
    //     this.isLoading = false;
    //   }

    // );
    // }

    form.reset();
  }
  onHandleError(){
    this.error = null;
  }
}