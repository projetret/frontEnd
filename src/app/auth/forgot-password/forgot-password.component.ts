import { Component, ViewChild , OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit{

        dateNow : Date = new Date();
        
        ngOnInit() {
			$.getScript('./assets/js/Particles.js');

          }
    @ViewChild('f') forogtPasswordForm: NgForm;

    constructor(private router: Router,
        private route: ActivatedRoute) { }

    // On submit click, reset form fields
    onSubmit() {
        this.forogtPasswordForm.reset();
    }

    // On login link click
    onLogin() {
        this.router.navigate(['login'], { relativeTo: this.route.parent });
    }



}
