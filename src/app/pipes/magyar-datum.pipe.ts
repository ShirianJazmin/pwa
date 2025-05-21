import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'magyarDatum'
})
export class MagyarDatumPipe implements PipeTransform {
  transform(value: string | Date): string {
    if (!value) return '';

    const date = new Date(value);
    return new Intl.DateTimeFormat('hu-HU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  }
}
