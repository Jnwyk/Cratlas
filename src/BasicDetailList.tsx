import BasicDetail from "./BasicDetail";

function BasicDetailList() {
  return (
    <div id="basic-detail-list-container" className="flex">
      <BasicDetail detailName="location" value="Poland" />
      <BasicDetail detailName="rock" value="Limestone" />
      <BasicDetail detailName="star" value="4.5" />
    </div>
  );
}

export default BasicDetailList;
