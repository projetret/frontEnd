import { Component, OnInit } from '@angular/core';
import { ROUTES } from './sidebar-routes.config';
import { RouteInfo } from "./sidebar.metadata";
import { Router, ActivatedRoute } from "@angular/router";
import { NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
declare var $: any;
@Component({
    // moduleId: module.id,
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
	    styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    constructor(private translate: TranslateService,private router: Router,
        private route: ActivatedRoute) {
            this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }

    ngOnInit() {
      
            // Customizer JS File
   $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
   
    changeLang(language: string) {
        this.translate.use(language);
    }

}


    


