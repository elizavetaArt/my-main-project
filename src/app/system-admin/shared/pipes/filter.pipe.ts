import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'wfmFilter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any, value: string, field: string): any {
    if (items.length === 0 || !value) {
      return items;
    }

    return items.filter((i) => {
      const t = Object.assign({}, i);
      if (!isNaN(i[field])) {
        i[field] += '';
      }
      if (field === 'name') {
        t[field] = t['catName'];
      }
      return i[field].toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
  }
}
