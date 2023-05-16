import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = 'NAVBAR';
  navOpen =false;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  NavBarOpen(){
    this.navOpen=!this.navOpen;
  }

}
