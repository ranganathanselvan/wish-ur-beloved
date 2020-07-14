import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { AuthenticationService } from "../_services";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  firstName: string;
  pass=true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastr: ToastrService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  // for accessing to form fields
  get fval() {
    return this.loginForm.controls;
  }

  onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.authenticationService
      .login(this.fval.email.value, this.fval.password.value, "Jk")
      .subscribe(
        (data) => {
          this.authenticationService
            .userDetails(this.fval.email.value)
            .subscribe((data) => {
              this.router.navigate(["/home"]);
            });
        },

        (error) => {
          this.toastr.error(error.error.message, "Error");
         // alert(error.error.message);
          this.loading = false;
          this.pass = false;
        }
      );
  }

  /* this.http.get("api/account/getuserbyemail", opts).subscribe(
            data => {
              if(data){
                this.firstName =  data['FirstName'];
                console.log(this.firstName);
              this.authenticationService.login(this.fval.email.value, this.fval.password.value, this.firstName )
                    .subscribe(
                      data => {
                        this.router.navigate(['/home']);
                      },
                      error => {
                        this.toastr.error(error.error.message, 'Error');
                        alert(error.error.message);
                        this.loading = false;
                      });

              }
              else{
                alert("No user");
                this.loading = false;
              }
              
                  },
                  error => {
                    this.toastr.error(error.error.message, 'Error');
                    this.loading = false;
                  });
                }*/
  //   this.authenticationService.login(this.fval.email.value, this.fval.password.value, )
  //     .subscribe(
  //       data => {
  //         this.router.navigate(['/home']);
  //       },
  //       error => {
  //         this.toastr.error(error.error.message, 'Error');
  //         this.loading = false;
  //       });
  // }
}
