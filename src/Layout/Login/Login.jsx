import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='mx-20 my-5'>
      <div className="hero min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex justify-center items-center lg:h-screen">
            <img
              src="https://img.freepik.com/free-vector/progress-overview-concept-illustration_114360-5262.jpg?t=st=1690200981~exp=1690201581~hmac=20537a98c1235a915ee15aab65ad465b4956ab37ff9d404640b542e7f025f91b"
              alt=""
              className="h-full"
            />
          </div>
          <div className="card p-12 flex-shrink-0 w-full lg:h-screen flex flex-col justify-center items-center shadow-2xl bg-base-100">
            <form 
            // onSubmit={handleSubmit(onSubmit)} 
            className="w-full max-w-lg">
              <div className="card-body">
                <div className="form-control">
                  <h1 className="text-center text-4xl mb-5 font-bold">
                    Log In !!
                  </h1>
                  <label className="label">
                    <span className="text-xl label-text font-semibold">
                      Email
                    </span>
                  </label>
                  <input
                    // {...register("email", {
                    //   required: true,
                    // })}
                    type="email"
                    placeholder="Email"
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
                    // {...register("password", {
                    //   required: true,
                    // })}
                    // type={show ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered text-xl"
                  />
                  <p
                //    onClick={() => setshow(!show)}
                  >
                    <small>
                      {/* {show ? (
                        <button className=" btn-link text-sm text-indigo-400">
                          Hide password
                        </button>
                      ) : (
                        <button className=" btn-link text-sm text-indigo-400">
                          {" "}
                          Show password
                        </button>
                      )} */}
                    </small>
                  </p>
                  {/* {errors.password?.type === "required" && (
                    <span className="text-red-500">
                      * This field is required!
                    </span>
                  )}
                  {loginError && (
                    <div className="text-red-500">{loginError}</div>
                  )} */}
                  <label className="label">
                    <a
                      href="#"
                      className="text-xl label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn border-2 border-red-800 my-4 bg-red-400 text-xl text-white"
                    value="Log in"
                  />
                  <button
                    // onClick={handleGoogle}
                    className="btn border-2 border-indigo-800 my-4 bg-indigo-500 text-xl  text-white"
                  >
                    Google LogIn
                  </button>
                  <Link
                    to={`/Registration`}
                    className="text-xl label-text-alt link link-hover"
                  >
                    Don&apos;t have an account? SignUp.
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

export default Login;
