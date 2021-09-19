import { Component } from '@angular/core';
import {
  faVk,
  faFacebook,
  faInstagram,
  faYoutube,
  faOdnoklassniki,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  vkIcon = faVk;

  fbIcon = faFacebook;

  instagramIcon = faInstagram;

  youtubeIcon = faYoutube;

  okIcon = faOdnoklassniki;
}
