const Table = () => {
  return (
    <div className="overflow-x-auto mx-20">
        <h1 className="text-4xl font-bold my-5 "> Top Research papers. </h1>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Reaserch</th>
            <th>Student Name </th>
            <th>College</th>
            <th>Publication link </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr className="hover">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
