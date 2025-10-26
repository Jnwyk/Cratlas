import CardList from "./CardList";
import SearchBar from "./SearchBar";
import crags from "../data/crags.json";
import type Filters from "../types/filters.interface";
import type Crag from "../types/crag.interface";
import filterCrags from "./utils/filterCrags";
import { useState } from "react";

function Main() {
  const [filteredCrags, setFilteredCrags] = useState<Array<Crag>>(crags);

  const handleSubmitFilter = (filters: Filters) => {
    setFilteredCrags(filterCrags(crags, filters));
  };

  return (
    <main className="flex relative gap-12 left-[50%] translate-x-[-50%] w-[80%]">
      <CardList crags={filteredCrags} />
      <SearchBar
        handleFilterFormSubmit={(filters) => handleSubmitFilter(filters)}
      />
    </main>
  );
}

export default Main;
