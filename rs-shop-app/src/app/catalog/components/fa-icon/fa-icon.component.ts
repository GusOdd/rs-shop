import { Component, Input, OnInit } from '@angular/core';
import {
  IconDefinition,
  faBlender,
  faLaptop,
  faBlog,
  faMouse,
  faCouch,
  faHiking,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fa-icon',
  templateUrl: './fa-icon.component.html',
  styleUrls: ['./fa-icon.component.scss'],
})
export class FaIconComponent implements OnInit {
  @Input() categoryID?: string;

  iconAlias!: IconDefinition;

  ngOnInit() {
    switch (this.categoryID) {
      case '0':
        this.iconAlias = faBlog;
        break;

      case 'appliances':
        this.iconAlias = faBlender;
        break;

      case 'electronics':
        this.iconAlias = faLaptop;
        break;

      case 'computers-peripherals':
        this.iconAlias = faMouse;
        break;

      case 'furniture':
        this.iconAlias = faCouch;
        break;

      case 'hobbies':
        this.iconAlias = faHiking;
        break;

      default:
        break;
    }
  }
}
