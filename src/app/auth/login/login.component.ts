import { Component, ViewChild , OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    dateNow: Date = new Date();

    constructor(private Auth: AuthService,
                private router: Router) { }

                ngOnInit() {
$.getScript('./assets/js/Particles.js');
                    $('#show-password').click(function() {
                        if ($(this).hasClass('fa-eye')) {
                            $('#inputPass').attr('type', 'text');
                            $(this).removeClass('fa-eye');
                            $(this).addClass('fa-eye-slash');
                        } else {
                            $('#inputPass').attr('type', 'password');
                            $(this).removeClass('fa-eye-slash');
                            $(this).addClass('fa-eye');
                        }
                    });
                  }

    loginUser(event) {
      event.preventDefault();
      const target = event.target;
      const CompanyCode = target.querySelector('#CompanyCode').value;
      const inputEmail = target.querySelector('#inputEmail').value;
      const inputPass = target.querySelector('#inputPass').value;
      this.Auth.getUserDetails(CompanyCode, inputEmail, inputPass).subscribe(data => {
        if (data.success) {
          this.router.navigate(['full-layout']);
          this.Auth.setLoggedIn(true);
        } else {
          window.alert(data.message);
        }
      });
      // console.log(CompanyCode, inputEmail,inputPass)
    }
  }
