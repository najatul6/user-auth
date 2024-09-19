const StatusTable = () => {
  return (
    <div className="overflow-x-auto py-16">
      <table className="min-w-full bg-white">
        <thead className="whitespace-nowrap">
          <tr>
            <th className="p-4 text-sm font-semibold bg-blue-500 text-white text-center">
              Task List
            </th>
            <th className="p-4 text-sm font-semibold bg-red-500 text-white text-center">
              Assign
            </th>
            <th className="p-4 text-sm font-semibold bg-green-500 text-white text-center">
              Priority
            </th>
            <th className="p-4 text-sm font-semibold bg-yellow-500 text-white text-center">
              Status
            </th>
            <th className="p-4 text-sm font-semibold bg-purple-800 text-white text-center">
              Progress
            </th>
          </tr>
        </thead>

        <tbody className="whitespace-nowrap divide-y divide-gray-200">
          <tr className="hover:bg-gray-50">
            <td className="text-gray-800 text-center p-4 text-sm">
              Opening Meeting
            </td>
            <td className="text-gray-800 text-center p-4 text-sm">Joe</td>
            <td className="text-center p-4 text-xs">
              <div className="mx-auto px-3 py-1 bg-red-500 w-max text-white rounded">
                High
              </div>
            </td>
            <td className="text-center p-4 text-xs">
              <div className="mx-auto px-3 py-1 bg-green-500 w-max text-white rounded">
                Done
              </div>
            </td>
            <td className="text-center p-4 flex items-center">
              <div className="bg-gray-300 rounded-full w-full h-2 min-w-[50px]">
                <div className="w-4/5 h-full rounded-full bg-purple-800"></div>
              </div>
              <p className="text-xs text-gray-500 ml-2">80%</p>
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="text-gray-800 text-center p-4 text-sm">Planning</td>
            <td className="text-gray-800 text-center p-4 text-sm">Dan</td>
            <td className="text-center p-4 text-xs">
              <div className="mx-auto px-3 py-1 bg-yellow-500 w-max text-white rounded">
                Normal
              </div>
            </td>
            <td className="text-center p-4 text-xs">
              <div className="mx-auto px-3 py-1 bg-yellow-500 w-max text-white rounded">
                In Progress
              </div>
            </td>
            <td className="text-center p-4 flex items-center">
              <div className="bg-gray-300 rounded-full w-full h-2 min-w-[50px]">
                <div className="w-3/12 h-full rounded-full bg-purple-800"></div>
              </div>
              <p className="text-xs text-gray-500 ml-2">25%</p>
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="text-gray-800 text-center p-4 text-sm">
              Media engagement
            </td>
            <td className="text-gray-800 text-center p-4 text-sm">Josh</td>
            <td className="text-center p-4 text-xs">
              <div className="mx-auto px-3 py-1 bg-red-500 w-max text-white rounded">
                High
              </div>
            </td>
            <td className="text-center p-4 text-xs">
              <div className="mx-auto px-3 py-1 bg-yellow-500 w-max text-white rounded">
                In Progress
              </div>
            </td>
            <td className="text-center p-4 flex items-center">
              <div className="bg-gray-300 rounded-full w-full h-2 min-w-[50px]">
                <div className="w-2/5 h-full rounded-full bg-purple-800"></div>
              </div>
              <p className="text-xs text-gray-500 ml-2">40%</p>
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="text-gray-800 text-center p-4 text-sm">Development</td>
            <td className="text-gray-800 text-center p-4 text-sm">James</td>
            <td className="text-center p-4 text-xs">
              <div className="mx-auto px-3 py-1 bg-yellow-500 w-max text-white rounded">
                Normal
              </div>
            </td>
            <td className="text-center p-4 text-xs">
              <div className="mx-auto px-3 py-1 bg-yellow-500 w-max text-white rounded">
                In Progress
              </div>
            </td>
            <td className="text-center p-4 flex items-center">
              <div className="bg-gray-300 rounded-full w-full h-2 min-w-[50px]">
                <div className="w-11/12 h-full rounded-full bg-purple-800"></div>
              </div>
              <p className="text-xs text-gray-500 ml-2">91%</p>
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="text-gray-800 text-center p-4 text-sm">Testing</td>
            <td className="text-gray-800 text-center p-4 text-sm">John</td>
            <td className="text-center p-4 text-xs">
              <div className="mx-auto px-3 py-1 bg-green-500 w-max text-white rounded">
                Low
              </div>
            </td>
            <td className="text-center p-4 text-xs">
              <div className="mx-auto px-3 py-1 bg-green-500 w-max text-white rounded">
                Done
              </div>
            </td>
            <td className="text-center p-4 flex items-center">
              <div className="bg-gray-300 rounded-full w-full h-2 min-w-[50px]">
                <div className="w-1/5 h-full rounded-full bg-purple-800"></div>
              </div>
              <p className="text-xs text-gray-500 ml-2">20%</p>
            </td>
          </tr>

          <tr className="hover:bg-gray-50">
            <td className="text-gray-800 text-center p-4 text-sm">
              Project closure
            </td>
            <td className="text-gray-800 text-center p-4 text-sm">Nick</td>
            <td className="text-center p-4 text-xs">
              <div className="mx-auto px-3 py-1 bg-green-500 w-max text-white rounded">
                Low
              </div>
            </td>
            <td className="text-center p-4 text-xs">
              <div className="mx-auto px-3 py-1 bg-red-500 w-max text-white rounded">
                Cancel
              </div>
            </td>
            <td className="text-center p-4 flex items-center">
              <div className="bg-gray-300 rounded-full w-full h-2 min-w-[50px]">
                <div className="w-1/5 h-full rounded-full bg-purple-800"></div>
              </div>
              <p className="text-xs text-gray-500 ml-2">20%</p>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="md:flex m-4">
        <p className="text-sm text-gray-500 flex-1">
          Showind 1 to 5 of 100 entries
        </p>
        <div className="flex items-center max-md:mt-4">
          <p className="text-sm text-gray-500">Display</p>

          <select className="text-sm text-gray-500 border border-gray-400 rounded px-1 py-2 mx-4 outline-none">
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>

          <div className="border flex rounded divide-x-2 border-gray-400 divide-gray-400 overflow-hidden">
            <button type="button" className="px-4 py-2 hover:bg-gray-100 text-sm">
              Previous
            </button>
            <button type="button" className="px-4 py-2 hover:bg-gray-100 text-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusTable;
