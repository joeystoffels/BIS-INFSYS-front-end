import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

// Import navigation elements
import { navigation } from './../../_nav';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-sidebar-nav',
  template: `
    <nav class="sidebar-nav">
      <ul class="nav">
        <img src="assets/img/logo.jpeg" width="200px"/>
        <p></p>
        <ng-template ngFor let-navitem [ngForOf]="navigation">
          <li *ngIf="isDivider(navitem)" class="nav-divider"></li>
          <ng-template [ngIf]="isTitle(navitem)">
            <app-sidebar-nav-title [title]='navitem'></app-sidebar-nav-title>
          </ng-template>
          <ng-template [ngIf]="!isDivider(navitem)&&!isTitle(navitem)">
            <app-sidebar-nav-item [item]='navitem'></app-sidebar-nav-item>
          </ng-template>
        </ng-template>
        <p></p>
        <li class="nav-item dropdown" dropdown placement="bottom right">
          <a class="nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" dropdownToggle (click)="false">
            <img src="assets/img/avatars/0.png" width="50px" class="img-avatar"/>
            <p><b>{{ auth.getUsername() }}</b></p>
          </a>
          <div class="dropdown-menu dropdown-menu-left" *dropdownMenu aria-labelledby="simple-dropdown">
            <div class="dropdown-header text-center"><strong>Account</strong></div>
            <a (click)="login('MEDEWERKER')" class="dropdown-item" href="#/opdracht8">Medewerker</a>
            <a (click)="login('FILIAALMANAGER')" class="dropdown-item" href="#/opdracht8">Filiaalmanager</a>
            <a (click)="login('DIRECTIE')" class="dropdown-item" href="#/opdracht8">Directie</a>
            <a (click)="login('VOORRAADBEHEERDER')" class="dropdown-item" href="#/opdracht8">Voorraadbeheerder</a>
            <a (click)="login('REPARATEUR')" class="dropdown-item" href="#/opdracht8">Reparateur</a>
            <a (click)="login('ADMIN')" class="dropdown-item" href="#/opdracht8">Admin</a>    
            <a class="dropdown-item" (click)="auth.logOut()">Logout</a>
          </div>
        </li>
      </ul>
    </nav>`
})
export class AppSidebarNavComponent {

  public navigation = navigation;

  public isDivider(item) {
    return item.divider ? true : false
  }

  public isTitle(item) {
    return item.title ? true : false
  }
  public username: String = '';
  public password: String = '';

  public login(name: String){
    switch (name){
      case 'MEDEWERKER': {
        this.auth.setUsername('Medewerker');
        this.auth.setPassword('medewerker');
        break;
      }
      case 'FILIAALMANAGER': {
        this.auth.setUsername('Filiaalmanager');
        this.auth.setPassword('filiaalmanager');
        break;
      }
      case 'DIRECTIE': {
        this.auth.setUsername('Directie');
        this.auth.setPassword('directie');
        break;
      }
      case 'VOORRAADBEHEERDER': {
        this.auth.setUsername('Voorraadbeheerder');
        this.auth.setPassword('voorraadbeheerder');
        break;
      }
      case 'REPARATEUR': {
        this.auth.setUsername('Reparateur');
        this.auth.setPassword('reparateur');
        break;
      }
      case 'ADMIN': {
        this.auth.setUsername('Admin');
        this.auth.setPassword('admin');
        break;
      }
    }
  }
  constructor(private auth: AuthService) { }
}



import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-nav-item',
  template: `
    <li *ngIf="!isDropdown(); else dropdown" [ngClass]="hasClass() ? 'nav-item ' + item.class : 'nav-item'">
      <app-sidebar-nav-link [link]='item'></app-sidebar-nav-link>
    </li>
    <ng-template #dropdown>
      <li [ngClass]="hasClass() ? 'nav-item nav-dropdown ' + item.class : 'nav-item nav-dropdown'"
          [class.open]="isActive()"
          routerLinkActive="open"
          appNavDropdown>
        <app-sidebar-nav-dropdown [link]='item'></app-sidebar-nav-dropdown>
      </li>
    </ng-template>
    `
})
export class AppSidebarNavItemComponent {
  @Input() item: any;

  public hasClass() {
    return this.item.class ? true : false
  }

  public isDropdown() {
    return this.item.children ? true : false
  }

  public thisUrl() {
    return this.item.url
  }

  public isActive() {
    return this.router.isActive(this.thisUrl(), false)
  }

  constructor( private router: Router )  { }

}

@Component({
  selector: 'app-sidebar-nav-link',
  template: `
    <a *ngIf="!isExternalLink(); else external"
      [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'"
      routerLinkActive="active"
      [routerLink]="[link.url]"
      (click)="hideMobile()">
      <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
      {{ link.name }}
      <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
    </a>
    <ng-template #external>
      <a [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'" href="{{link.url}}">
        <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
        {{ link.name }}
        <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
      </a>
    </ng-template>
  `
})
export class AppSidebarNavLinkComponent {
  @Input() link: any;

  public hasVariant() {
    return this.link.variant ? true : false
  }

  public isBadge() {
    return this.link.badge ? true : false
  }

  public isExternalLink() {
    return this.link.url.substring(0, 4) === 'http' ? true : false
  }

  public isIcon() {
    return this.link.icon ? true : false
  }

  public hideMobile() {
    if (document.body.classList.contains('sidebar-mobile-show')) {
      document.body.classList.toggle('sidebar-mobile-show')
    }
  }

  constructor() { }
}

@Component({
  selector: 'app-sidebar-nav-dropdown',
  template: `
    <a class="nav-link nav-dropdown-toggle" appNavDropdownToggle>
      <i *ngIf="isIcon()" class="{{ link.icon }}"></i>
      {{ link.name }}
      <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
    </a>
    <ul class="nav-dropdown-items">
      <ng-template ngFor let-child [ngForOf]="link.children">
        <app-sidebar-nav-item [item]='child'></app-sidebar-nav-item>
      </ng-template>
    </ul>
  `
})
export class AppSidebarNavDropdownComponent {
  @Input() link: any;

  public isBadge() {
    return this.link.badge ? true : false
  }

  public isIcon() {
    return this.link.icon ? true : false
  }

  constructor() { }
}

@Component({
  selector: 'app-sidebar-nav-title',
  template: ''
})
export class AppSidebarNavTitleComponent implements OnInit {
  @Input() title: any;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const li = this.renderer.createElement('li');
    const name = this.renderer.createText(this.title.name);

    this.renderer.addClass(li, 'nav-title');

    if ( this.title.class ) {
      const classes = this.title.class;
      this.renderer.addClass(li, classes);
    }

    if ( this.title.wrapper ) {
      const wrapper = this.renderer.createElement(this.title.wrapper.element);

      this.renderer.appendChild(wrapper, name);
      this.renderer.appendChild(li, wrapper);
    } else {
      this.renderer.appendChild(li, name);
    }
    this.renderer.appendChild(nativeElement, li)
  }
}

export const APP_SIDEBAR_NAV = [
  AppSidebarNavComponent,
  AppSidebarNavDropdownComponent,
  AppSidebarNavItemComponent,
  AppSidebarNavLinkComponent,
  AppSidebarNavTitleComponent
];
