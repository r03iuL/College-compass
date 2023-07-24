import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div>
      <div className="hero min-h-screen my-10 mx-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center items-center lg:h-screen">
            <img
              src="https://img.freepik.com/free-vector/checklist-concept-illustration_114360-479.jpg?t=st=1690200996~exp=1690201596~hmac=29fd304175401ffb6b0dd0bbfc6665f9884c463036fea047d9321f275a015f60"
              alt=""
              className="w-full mx-auto h-full"
            />
          </div>
          <div className="card p-12 flex-shrink-0 w-full lg:h-screen flex flex-col justify-center items-center shadow-2xl bg-base-100">
            <form
              // onSubmit={handleSubmit(onSubmit)}
              className="w-full"
            >
              <div className="card-body">
                <h1 className="text-center text-4xl mb-5 font-bold">
                  Sign Up!!
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl label-text font-semibold">
                      Name
                    </span>
                  </label>
                  <input
                    name="name"
                    // {...register("name", { required: true })}
                    type="text"
                    placeholder="Enter Your Name"
                    className="input input-bordered text-xl"
                  />
                  {/* {errors.name?.type === "required" && (
                    <span className="text-red-500">
                      * This field is required!
                    </span>
                  )} */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl label-text font-semibold">
                      Email
                    </span>
                  </label>
                  <input
                    name="email"
                    // {...register("email", { required: true })}
                    type="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered text-xl"
                  />
                  {/* {errors.email?.type === "required" && (
                    <span className="text-red-500">
                      * This field is required!
                    </span>
                  )} */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl label-text font-semibold">
                      Password
                    </span>
                  </label>
                  <input
                    name="password"
                    // {...register("password", {
                    //   required: true,
                    //   minLength: 6,
                    //   pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                    // })}
                    type="password"
                    placeholder="Enter Password"
                    className="input input-bordered text-xl"
                  />
                  {/* {errors.password?.type === "required" && (
                    <span className="text-red-500">
                      * This field is required!
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-500">
                      * Minimum 6 characters are required!
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-500">
                      * Minimum 1 special character and 1 capital letter are required!
                    </span>
                  )} */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl label-text font-semibold">
                      Confirm Password
                    </span>
                  </label>
                  <input
                    name="conPassword"
                    // {...register("conPassword", {
                    //   required: true,
                    //   validate: (value) =>
                    //     value === password || "Passwords do not match",
                    // })}
                    type="password"
                    placeholder="Confirm Password"
                    className="input input-bordered text-xl"
                  />
                  {/* {errors.conPassword && (
                    <span className="text-red-500">{errors.conPassword.message}</span>
                  )} */}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-xl label-text font-semibold">
                      Photo Url
                    </span>
                  </label>
                  <input
                    name="photo"
                    // {...register("photo", { required: true })}
                    type="text"
                    placeholder="Enter Photo URL"
                    className="input input-bordered text-xl"
                  />
                  {/* {errors.photo?.type === "required" && (
                    <span className="text-red-500">
                      * This field is required!
                    </span>
                  )} */}
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="btn border-2 border-red-800 my-4 bg-red-400 text-xl text-white"
                  />

                  <Link
                    to={`/LogIn`}
                    className="text-xl label-text-alt link link-hover"
                  >
                    Already have an account yet? Log In
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
