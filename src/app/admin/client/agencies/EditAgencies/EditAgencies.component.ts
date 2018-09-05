
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MysqlagService } from '.././ListAgencies/mysqlag.service';
import { User } from '.././ListAgencies/user';

@Component({
  selector: 'app-EditAgencies',
  templateUrl: './EditAgencies.component.html',
  styleUrls: ['./EditAgencies.component.scss']
})
export class EditAgenciesComponent implements OnInit {
  // model:any={};
  model = new User();
  id = this.route.snapshot.params['id'];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _mysqlagservice: MysqlagService
  ) {}

  ngOnInit() {
    this.getSingleAgency();
  }

  getSingleAgency() {
    // tslint:disable-next-line:no-shadowed-variable
    this._mysqlagservice.getAgency(this.id).subscribe(User => {
      this.model = User[0];
    });
  }

  updateAgency() {
    this._mysqlagservice
      .updateAgency(this.model)
      .subscribe(() => this.goBack());
  }

  goBack() {
    this.router.navigate(['/ListAgencies']);
  }
}
