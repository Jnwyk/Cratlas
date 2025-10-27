interface PaginationNumberProps {
  number: number;
}

function PaginationNumber({ number }: PaginationNumberProps) {
  return (
    <span id={`pagination-number-${number}`} className="p-4">
      {number}
    </span>
  );
}

export default PaginationNumber;
