
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
declare var $: any;
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})


export class NavbarComponent implements OnInit {
    public menuItems: any[];

    constructor(private translate: TranslateService,private router: Router,
        private route: ActivatedRoute) {
            this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }

    ngOnInit() { }
   
    changeLang(language: string) {
        this.translate.use(language);
    }

}
