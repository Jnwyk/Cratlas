interface PaginationSymbol {
  pagination: "first" | "previous" | "next" | "last";
  onClick: () => void;
}

function PaginationSymbol({ pagination, onClick }: PaginationSymbol) {
  const getSymbol = () => {
    switch (pagination) {
      case "first":
        return "<<";
      case "previous":
        return "<";
      case "next":
        return ">";
      case "last":
        return ">>";
    }
  };

  const symbol = getSymbol();

  return (
    <span
      id={`pagination-number-${symbol}`}
      className="p-4"
      onClick={() => onClick()}
    >
      {symbol}
    </span>
  );
}

export default PaginationSymbol;
