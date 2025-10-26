import type Crag from "../../types/crag.interface";
import type Filters from "../../types/filters.interface";

export default function filterCrags(
  crags: Array<Crag>,
  filters: Filters
): Array<Crag> {
  return crags.filter((element) => {
    return (
      (filters.country
        ? filters.country.toLocaleLowerCase() ===
          element.name.toLocaleLowerCase()
        : true) &&
      (filters.ratingMin ? Number(filters.ratingMin) < element.rating : true) &&
      (filters.ratingMax ? Number(filters.ratingMax) > element.rating : true)
    );
  });
}
