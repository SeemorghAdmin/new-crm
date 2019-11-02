import { MatPaginatorIntl } from '@angular/material';

const farsiRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length == 0 || pageSize == 0) { return `0 از ${length}`; }

  length = Math.max(length, 0);

  const startIndex = page * pageSize;

  // If the start index exceeds the list length, do not try and fix the end index to the end.
  const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} از ${length}`;
}


export function getFarsiPaginatorIntl() {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'تعداد سطر در صفحه:';
  paginatorIntl.nextPageLabel = 'صفحه بعدی';
  paginatorIntl.previousPageLabel = 'صفحه قبلی';
  paginatorIntl.getRangeLabel = farsiRangeLabel;

  return paginatorIntl;
}
