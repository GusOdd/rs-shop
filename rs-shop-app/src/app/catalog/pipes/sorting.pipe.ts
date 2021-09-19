import { Pipe, PipeTransform } from '@angular/core';
import { IGoods } from 'src/app/core/models/goods.type';

@Pipe({
  name: 'sorting',
})
export class SortingPipe implements PipeTransform {
  transform(
    readOnlyItems: IGoods[],
    isSortingAscending: boolean,
    typeOfSorting: 'rating' | 'price' | undefined,
  ): IGoods[] {
    const multiplication = isSortingAscending ? 1 : -1;

    const items = [...readOnlyItems];

    if (typeOfSorting === 'rating') {
      return items.sort((a, b) => multiplication * (a.rating - b.rating));
    }

    if (typeOfSorting === 'price') {
      return items.sort((a, b) => multiplication * (a.price - b.price));
    }

    return readOnlyItems;
  }
}
