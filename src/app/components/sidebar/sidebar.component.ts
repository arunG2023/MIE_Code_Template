import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/new-event-request', title: 'New Event Request',  icon:'post_add', class: '' },
    { path: '/honararium-payment-request', title: 'Honararium Payment ',  icon:'content_paste', class: '' },
    { path: '/post-event-settlement', title: 'Post Event Settlement',  icon:'library_books', class: '' },
    { path: '/view-event-list', title: 'View Event Requests',  icon:'event', class: '' },
    { path: '/view-honararium-list', title: 'Honararium Payment List',  icon:'receipt', class: '' },
    { path: '/post-event-list', title: 'Post Event Settlement List',  icon:'view_day', class: '' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
