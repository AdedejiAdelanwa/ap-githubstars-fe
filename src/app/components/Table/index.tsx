import { TableProps } from "./model";

const Table = ({ columns, dataSource, isLoading = false }: TableProps) => {
  return (
    <div className="flex flex-col items-center">
      <table className="w-full overflow-x-hidden text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            {columns.length > 0 ? (
              columns.map((column) => (
                <th key={column.key} className={"px-6 py-3"}>
                  <div className={"flex items-center justify-between"}>
                    {column.title}
                  </div>
                </th>
              ))
            ) : (
              <></>
            )}
          </tr>
        </thead>

        <tbody>
          {isLoading && (
            <tr>
              <td colSpan={columns.length} className="px-6 py-3">
                <div className="flex justify-center items-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
                </div>
              </td>
            </tr>
          )}

          {dataSource?.map((data) => (
            <tr
              className="bg-white border-b  hover:bg-gray-50 "
              key={data.key as React.Key}
            >
              {columns.length ? (
                columns.map((column, index) => (
                  <td key={index} className={"px-6 py-3"}>
                    {data[column.dataIndex] as React.ReactNode}
                  </td>
                ))
              ) : (
                <></>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
