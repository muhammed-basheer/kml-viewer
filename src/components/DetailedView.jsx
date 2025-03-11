import React from "react";

const DetailedView = ({ details }) => {
  if (!details || details.length === 0) {
    return <p>No details available. Upload a valid KML file.</p>;
  }

  return (
    <div>
      <h2>Detailed View</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Element Type</th>
            <th>Total Length (km)</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {details.map((item, index) => (
            <tr key={index}>
              <td>{item.type}</td>
              <td>{item.length}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailedView;
