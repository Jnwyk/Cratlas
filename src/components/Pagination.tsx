import PaginationNumber from "./UI/PaginationNumber";
import PaginationSymbol from "./UI/PaginationSymbol";
import { type Action } from "../reducers/paginationReducer";
import setPaginationArray from "../utils/setPaginationArray";

interface PaginationProps {
  currentPage: number;
  paginationLength: number;
  changePage: (action: Action) => void;
}

function Pagination({
  currentPage,
  paginationLength,
  changePage,
}: PaginationProps) {
  const paginationArray = setPaginationArray(currentPage, paginationLength);

  const selectNextPageNumber = () => changePage({ type: "NEXT" });
  const selectFirstPageNumber = () => changePage({ type: "FIRST" });
  const selectPreviousPageNumber = () => changePage({ type: "PREVIOUS" });
  const selectLastPageNumber = () => changePage({ type: "LAST" });

  return (
    <div>
      <PaginationSymbol pagination="first" onClick={selectFirstPageNumber} />
      <PaginationSymbol
        pagination="previous"
        onClick={selectPreviousPageNumber}
      />
      <span className="p-4">
        {paginationArray.map((element) => {
          return <PaginationNumber key={element} number={element} />;
        })}
      </span>
      <PaginationSymbol pagination="next" onClick={selectNextPageNumber} />
      <PaginationSymbol pagination="last" onClick={selectLastPageNumber} />
    </div>
  );
}

export default Pagination;
