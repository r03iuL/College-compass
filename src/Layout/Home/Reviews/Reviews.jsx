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
          <option>Oakdale College</option>
          <option>Ivywood College</option>
          <option>Mapleview College </option>
          <option>Brookside College </option>
          <option>Cedarhill College </option>
        </select>
      </div>
      <div>
        <Grids></Grids>
      </div>
    </div>
  );
};

export default Reviews;
