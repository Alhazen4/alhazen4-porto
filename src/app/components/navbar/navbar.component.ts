import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() textColor: string | any;

  ngOnInit() {
    console.log(this.textColor);
  }
  
  ngOnChange() {
    console.log(this.textColor);
  }
  
}
