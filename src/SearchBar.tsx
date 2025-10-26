import { useState, type FormEvent } from "react";
import TextInput from "./UI/TextInput";
import Button from "./UI/Button";
import type Filters from "../types/filters.interface";

interface SearchBarProps {
  handleFilterFormSubmit(filterValues: Filters): void;
}

function SearchBar({ handleFilterFormSubmit }: SearchBarProps) {
  const [filters, setFilters] = useState<Filters>({
    country: "",
    area: "",
    ratingMin: "",
    ratingMax: "",
  });

  const changeFilterValue = (property: string, value: number | string) => {
    setFilters((prevValue) => {
      return { ...prevValue, [property]: value };
    });
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleFilterFormSubmit(filters);
  };

  return (
    <form
      onSubmit={(event) => handleFormSubmit(event)}
      className="relative top-0 bottom-0 w-[25%] bg-[#D9E9CF] flex-center-hor flex-col pt-2 gap-4 focus-visible::outline-none"
    >
      <TextInput
        id="country"
        placeholder="Select country"
        value={filters.country}
        changeValue={(value) => changeFilterValue("country", value)}
      />
      <TextInput
        id="country"
        placeholder="Select area"
        value={filters.area}
        changeValue={(value) => changeFilterValue("area", value)}
      />
      <div className="relative">
        <h5>Rating</h5>
        <div className="flex">
          <TextInput
            id="rating-min"
            placeholder="min"
            value={filters.ratingMin}
            changeValue={(value) => changeFilterValue("ratingMin", value)}
          />
          <TextInput
            id="rating-max"
            placeholder="max"
            value={filters.ratingMax}
            changeValue={(value) => changeFilterValue("ratingMax", value)}
          />
        </div>
      </div>
      <Button id="filter-submit" type="submit">
        Filter
      </Button>
    </form>
  );
}

export default SearchBar;
