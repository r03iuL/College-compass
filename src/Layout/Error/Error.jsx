import { Link } from 'react-router-dom';
import img from '/Error.jpg'
const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative">
        <img
          className="mx-auto max-h-screen"
          src={img}
          alt=""
        />
        <Link
          className=" text-center bg-red-300 absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-semibold py-4 px-4 rounded-lg shadow-md w-1/4"
          to={`/`}
        >
          Go Back to Home 
        </Link>
      </div>
    </div>
  );
};

export default Error;
