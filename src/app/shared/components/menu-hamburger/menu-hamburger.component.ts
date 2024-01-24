import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-menu-hamburger',
    templateUrl: './menu-hamburger.component.html',
    styleUrls: ['./menu-hamburger.component.scss']

})

export class MenuHamburgerComponent {
  @Output() goToEmmiter: EventEmitter<number> = new EventEmitter<number>();
  public isExpanded: boolean = false;


  public showMenu() {
    this.isExpanded = !this.isExpanded
    
  }
}