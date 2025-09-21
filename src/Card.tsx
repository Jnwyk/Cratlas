import tempImg from "../assets/jura-krakowsko-czestochowska.jpg";
import BasicDetailList from "./BasicDetailList";

function Card() {
  return (
    <div
      id="list-card-container"
      className="flex bg-white shadow-xl rounded-lg mb-4 w-5xl cursor-pointer transition-transform duration-100 hover:-translate-y-0.25 hover:shadow-2xl"
    >
      <img
        id="list-card-image"
        src={tempImg}
        alt="temp-img"
        className="h-24 w-24 object-cover mr-2"
      />
      <div id="list-card-information">
        <h4 id="list-card-header">Jura Krakowsko-Częstochowska</h4>
        <BasicDetailList />
        <p id="list-card-desctiption" className="m-0.5 text-xs text-stone-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis
          ullam voluptate eaque? Facilis impedit quisquam veritatis nulla ea id
          voluptatum? Itaque, fugiat nulla alias quas animi beatae odio nesciunt
          placeat!
        </p>
      </div>
    </div>
  );
}

export default Card;
