const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/Group.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="text-justify">
            <h1 className="mb-5 text-5xl font-bold text-amber-400">
              Welcome to College Campus.{" "}
            </h1>
            <p className="mb-5 text-xl text-amber-300 font-semibold ">
              Your journey to finding the perfect college starts here. At
              College Compass, we are dedicated to providing you with all the
              essential details and guidance you need to make informed decisions
              about your future. Discover a diverse range of colleges, explore
              their programs, facilities, and campus life. Our comprehensive
              database is designed to help you find the college that aligns with
              your interests and aspirations.
            </p>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered text-black font-semibold w-full max-w-xs my-3 px5"
            />
            <button className=" mx-2 btn bg-red-400 border-2">Search College</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
