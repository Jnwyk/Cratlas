import CardList from "./CardList";
import SearchBar from "./SearchBar";
import crags from "../data/crags.json";
import type Filters from "../types/filters.interface";
import type Crag from "../types/crag.interface";
import filterCrags from "./utils/filterCrags";
import { useEffect, useReducer, useState } from "react";
import Pagination from "./Pagination";
import { paginationReducer } from "./reducers/paginationReducer";

function Main() {
  const [filteredCrags, setFilteredCrags] = useState<Array<Crag>>(crags);
  const [state, dispatch] = useReducer(paginationReducer, {
    currentPage: 1,
    totalItems: filteredCrags.length,
  });

  useEffect(() => {
    dispatch({ type: "FILTER", payload: filteredCrags.length });
    console.log(state);
  }, [filteredCrags]);

  const handleSubmitFilter = (filters: Filters) => {
    setFilteredCrags(filterCrags(crags, filters));
  };

  return (
    <main className="flex relative gap-12 left-[50%] translate-x-[-50%] w-[80%]">
      <div>
        <CardList crags={filteredCrags} />
        <Pagination
          currentPage={state.currentPage}
          paginationLength={state.totalItems}
          changePage={(action) => dispatch(action)}
        />
      </div>
      <SearchBar
        handleFilterFormSubmit={(filters) => handleSubmitFilter(filters)}
      />
    </main>
  );
}

export default Main;
