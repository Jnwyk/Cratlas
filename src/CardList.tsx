import Card from "./Card";

interface CardLList {
  crags: number[];
}

function CardList({ crags }: CardLList) {
  return (
    <div className="flex flex-col">
      {crags.map((crag) => (
        <Card key={crag} />
      ))}
    </div>
  );
}

export default CardList;
