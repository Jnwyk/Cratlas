const ITEMS_PER_PAGE = 10;

export default function setPaginationArray(
  selectedPageNumber: number,
  maxNumber: number
): Array<number> {
  console.log(selectedPageNumber, maxNumber);
  if (maxNumber / ITEMS_PER_PAGE <= 1) return [1];
  else if (maxNumber / ITEMS_PER_PAGE <= 2) return [1, 2];
  if (selectedPageNumber === 1) return [1, 2, 3];
  else if (selectedPageNumber === maxNumber)
    return [maxNumber - 2, maxNumber - 1, maxNumber];
  else
    return [selectedPageNumber - 1, selectedPageNumber, selectedPageNumber + 1];
}
