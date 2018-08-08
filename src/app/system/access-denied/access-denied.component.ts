import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-denied',
  templateUrl: './access-denied.component.html',
  styleUrls: ['./access-denied.component.scss']
})
export class AccessDeniedComponent implements OnInit {
  dateNow : Date = new Date();

  constructor() { }

  ngOnInit() {
    $.getScript('./assets/js/Particles.js');

  }

}
