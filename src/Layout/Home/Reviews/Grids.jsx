import ReactStars from "react-rating-stars-component";

const Grids = () => {
  const stars = {
    size: 30,
    value: 2.5,
    edit: false,
    isHalf: true,
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="card min-w-min text-black p-5 border-4 border-slate-500 m-5">
        <div className="flex flex-row items-center">
          <img src="./logo.png" alt="" className="w-20" />
          <h6> Robiul Islam </h6>
        </div>
        <div>
          <ReactStars {...stars} />
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et
            beatae labore corrupti fugiat voluptatibus, dolores error qui nulla.
            Ducimus, dignissimos? Laboriosam aspernatur fugiat error quas
            quibusdam aliquid, inventore porro.{" "}
          </p>
        </div>
      </div>
      <div className="card min-w-min text-black p-5 border-4 border-slate-500 m-5">
        <div className="flex flex-row items-center">
          <img src="./logo.png" alt="" className="w-20" />
          <h6> Robiul Islam </h6>
        </div>
        <div>
          <ReactStars {...stars} />
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et
            beatae labore corrupti fugiat voluptatibus, dolores error qui nulla.
            Ducimus, dignissimos? Laboriosam aspernatur fugiat error quas
            quibusdam aliquid, inventore porro.{" "}
          </p>
        </div>
      </div>
      <div className="card min-w-min text-black p-5 border-4 border-slate-500 m-5">
        <div className="flex flex-row items-center">
          <img src="./logo.png" alt="" className="w-20" />
          <h6> Robiul Islam </h6>
        </div>
        <div>
          <ReactStars {...stars} />
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias et
            beatae labore corrupti fugiat voluptatibus, dolores error qui nulla.
            Ducimus, dignissimos? Laboriosam aspernatur fugiat error quas
            quibusdam aliquid, inventore porro.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grids;
