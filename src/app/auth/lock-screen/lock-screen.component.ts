import { Component, ViewChild , OnInit} from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-lock-screen',
  templateUrl: './lock-screen.component.html',
  styleUrls: ['./lock-screen.component.css']
})
export class LockScreenComponent implements OnInit{
  
    dateNow : Date = new Date();
    
    ngOnInit() {
        $.getScript('./assets/js/Particles.js');
        $('#show-password').click(function()
        {
            if ($(this).hasClass('fa-eye'))
            {
                $('#inputPass').attr('type', 'text');
                $(this).removeClass('fa-eye');
                $(this).addClass('fa-eye-slash');
            } else {
                $('#inputPass').attr('type', 'password');
                $(this).removeClass('fa-eye-slash');
                $(this).addClass('fa-eye');
            }
        })
      }
    @ViewChild('f') lockScreenForm: NgForm;

    onSubmit() {
        this.lockScreenForm.reset();
    }




}
