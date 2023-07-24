import Grids from "./Grids";


const Reviews = () => {
  return (
    <div className="mx-20 ">
        <h1 className="text-4xl font-bold my-5">Reviews.</h1>
      <div className="flex flex-col items-center my-3">
        <select className="select select-bordered w-full max-w-3xl mx-auto">
          <option disabled selected>
            Select College
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <div>
        <Grids></Grids>
      </div>
    </div>
  );
};

export default Reviews;
