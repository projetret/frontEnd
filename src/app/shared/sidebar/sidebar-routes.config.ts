import { RouteInfo } from './sidebar.metadata';
import { AdminRoutingModule} from '../../admin/admin-routing.module';

export const ROUTES: RouteInfo[] = [

    {
        path: '/full-layout', title: 'Dashboard', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    /* {
        path: 'full-layout/content-layout', title: 'Content Layout', icon: 'ft-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    }, */

    {
        path: '/Agency', title: 'Agency', icon: 'ft-globe', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/agencyprofile', title: 'Agency profile', icon: 'fa fa-vcard-o', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/users', title: 'Users', icon: 'fa fa-user', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/setting', title: 'Setting', icon: 'fa fa-cogs', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            
        ]
     
    },
    {
        path: '/Client ', title: 'Client ', icon: 'fa fa-user', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/agencies', title: 'Agencies', icon: 'ft-globe', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/distributors', title: 'Distributors', icon: 'fa fa-sitemap', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/corporate-clients', title: 'Corporate clients', icon: 'fa fa-handshake-o', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/privateclients', title: 'Private clients', icon: 'fa fa-user-secret', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            
        ]
     
    },
   /*  {
        path: '/Fournisseurs ', title: 'Fournisseurs ', icon: 'fa fa-user', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: 'javascript:;', title: '', icon: 'ft-globe', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
        ]
     
    }, */
    {
        path: '/SecuritiesManagement ', title: 'Gestion des Titres ', icon: 'fa fa-exchange', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: '/cashing', title: 'Encaissements', icon: 'ft-globe', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            { path: '/securities-instances', title: 'Titres en Instances', icon: 'fa fa-history', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
        ]
     
    },
    {
        path: '/Finance  ', title: 'Finance ', icon: 'fa fa-line-chart', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: 'javascript:;', title: 'Bill', icon: 'fa fa-money', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] }, 
        ]
     
    },
    {
        path: '/Gestions  ', title: 'Gestions  ', icon: 'fa fa-tasks', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
            { path: 'javascript:;', title: 'Suivie Clients', icon: 'fa fa-connectdevelop', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] }, 
        ]
     
    },
     /*   path: '', title: 'PNR', icon: 'fa fa-plane', class: 'has-sub', badge: '1', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false,
        submenu: [
            { path: 'javascript:;', title: 'Second Level', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
            {
                path: '', title: 'Second Level Child', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
                submenu: [
                    { path: 'javascript:;', title: 'Third Level 1.1', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                    { path: 'javascript:;', title: 'Third Level 1.2', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
                ]
            }, 
        ]*/
    {
        path: '/changelog', title: 'ChangeLog', icon: 'ft-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    { path: 'https://www.aero-it.net/ret-projet/documentation', title: 'Documentation', icon: 'ft-folder', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
    { path: 'https://support.aero-it.net/', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },

];
