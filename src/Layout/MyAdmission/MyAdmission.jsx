const MyAdmission = () => {
  return (
    <div className="mx-20">
      <h1 className="text-center text-3xl font-bold my-5  p-5 border-b-4 border-red-400">
        My Admission{" "}
      </h1>
      <div className="overflow-x-auto my-10 ">
        <table className="table text-xl">
          {/* head */}
          <thead className="text-xl">
            <tr>
              <th></th>
              <th>College</th>
              <th>Ratings</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover">
              <th>1</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAdmission;
