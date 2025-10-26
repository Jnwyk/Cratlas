import Card from "./Card";
import type Crag from "../types/crag.interface";

interface CardLList {
  crags: Array<Crag>;
}

function CardList({ crags }: CardLList) {
  return (
    <div className="flex flex-col w-[75%] mt-16">
      {crags.map((crag) => (
        <Card
          key={crag.id}
          name={crag.name}
          photoUrl={crag.photoUrl[0]}
          description={crag.description}
        />
      ))}
    </div>
  );
}

export default CardList;
