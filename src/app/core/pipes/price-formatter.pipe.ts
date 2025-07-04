import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'priceFormatter',
    standalone: true
})
export class PriceFormatterPipe implements PipeTransform {

  transform(price: number): string {
    return price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

}
