import React from "react";

const DetailedView = ({ details }) => {
  if (!details || details.length === 0) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-400">No details available. Upload a valid KML file.</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4 text-blue-300">Detailed View</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-gray-600">
            <tr>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Element Type
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Total Length (km)
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Name
              </th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-500">
            {details.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-750"}>
                <td className="py-4 px-6 text-sm font-medium text-white">
                  {item.type}
                </td>
                <td className="py-4 px-6 text-sm text-blue-300 font-mono">
                  {item.length}
                </td>
                <td className="py-4 px-6 text-sm text-gray-300">
                  {item.name || "Unnamed"}
                </td>
                <td className="py-4 px-6 text-sm text-gray-300 truncate max-w-xs">
                  {item.description || "No description"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailedView;