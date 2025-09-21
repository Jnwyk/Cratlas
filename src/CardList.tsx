import Card from "./Card";

interface CardLList {
  crags: number[];
  pagination?: number;
}

function CardList({ crags, pagination }: CardLList) {
  return (
    <div className="flex flex-col">
      {crags.map((crag) => (
        <Card key={crag} />
      ))}
    </div>
  );
}

export default CardList;
