import BasicDetailList from "./BasicDetailList";

interface CardProps {
  name: string;
  photoUrl: string;
  description: string;
}

function Card({ name, photoUrl, description }: CardProps) {
  return (
    <div
      id="list-card-container"
      className="flex bg-white mb-4 shadow-xl rounded-lg cursor-pointer transition-transform duration-100 hover:-translate-y-0.25 hover:shadow-2xl"
    >
      <img
        id="list-card-image"
        src={photoUrl[0]}
        alt="temp-img"
        className="h-40 w-40 object-cover mr-2"
      />
      <div id="list-card-information">
        <h4 id="list-card-header" className="mt-1 mb-1 text-2xl font-bold">
          {name}
        </h4>
        <BasicDetailList />
        <p id="list-card-desctiption" className="m-0.5 text-xs text-stone-700">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
