import React from 'react';

const Row = ({ order, record }) => (
  <tr key={`id_${record.id}`}>
    { order.map((key) => (
      <td key={`id_${record.id}_${key}`}>{record[key]}</td>
    )) }
  </tr>
);

function TBody({ data }) {
  const order = Object.keys(data[0]);
  return (
    <tbody>
      {
        data.map((record) => <Row order={order} record={record} />)
      }
    </tbody>
  );
}

export default TBody;
