// import _ from 'lodash';

export function paginate(items, pageNumber, pageSize) {
  const startIndex = pageSize * (pageNumber - 1);
  return items.slice(startIndex, pageSize);
  // return _(items).slice(startIndex).take(pageSize).value();
}
