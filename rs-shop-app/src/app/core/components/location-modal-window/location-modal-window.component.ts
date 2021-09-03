import { Component } from '@angular/core';

@Component({
  selector: 'app-location-modal-window',
  templateUrl: './location-modal-window.component.html',
  styleUrls: ['./location-modal-window.component.scss'],
})
export class LocationModalWindowComponent {
  cities: string[] = ['Минск', 'Брест', 'Витебск', 'Гомель', 'Гродно', 'Могилёв'];
  selectedCity?: string;
}
