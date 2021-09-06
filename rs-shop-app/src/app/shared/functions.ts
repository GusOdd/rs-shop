/* eslint no-underscore-dangle: ["error", { "allow": ["_getHostElement"] }] */

import { MatSelectionList } from '@angular/material/list';

export function toggleSelectedItem(list: MatSelectionList, id: string) {
  list.deselectAll();
  list.options.forEach((listElement) => {
    listElement._getHostElement().classList.remove('active');
    if (listElement.value === id) {
      listElement.toggle();
      listElement._getHostElement().classList.add('active');
    }
  });
}
