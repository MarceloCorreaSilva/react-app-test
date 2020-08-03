import React from 'react';

function THead({ keys, head }) {
  const tableHead = head || {};
  return (
    <thead>
      <tr>
        {
          keys.map((key) => (
            <th key={`id_${key}`}>
              {tableHead[key] || key.charAt(0).toUpperCase() + key.slice(1)}
            </th>
          ))
        }
      </tr>
    </thead>
  );
}

export default THead;
