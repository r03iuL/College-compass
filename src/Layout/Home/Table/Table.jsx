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
            <td>Implementation of A.I in medical health</td>
            <td>Cy Ganderton</td>
            <td>Oakdale College </td>
          </tr>
          {/* row 2 */}
          <tr className="hover">
            <th>2</th>
            <td>
              Examining the Effects of Social Media Usage on Mental Health and
              Well-being Among Young Adults
            </td>
            <td>Hart Hagerty</td>
            <td>Willowbrook College</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>The Evolution of Contemporary Street Art: From Subversion to Mainstream Recognition</td>
            <td>Brice Swyre</td>
            <td>Brookside College</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
