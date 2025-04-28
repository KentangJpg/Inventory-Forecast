const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto mt-5 ">
      <table className="min-w-full bg-white border-gray-300 rounded-xl overflow-hidden shadow-md">
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="py-2 px-4 bg-gray-100 border-b text-left">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-4">
                No data available.
              </td>
            </tr>
          ) : (
            data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="py-2 px-4 border-b">
                    {row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
