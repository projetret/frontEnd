import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-error',
  templateUrl: './server-error.component.html',
  styleUrls: ['./server-error.component.scss']
})
export class ServerErrorComponent implements OnInit {
  dateNow : Date = new Date();
  constructor() { }

  ngOnInit() {
    $.getScript('./assets/js/Particles.js');
  }

}
