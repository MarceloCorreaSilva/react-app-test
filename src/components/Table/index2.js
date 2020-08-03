import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table``;

const Head = ({ keys, head }) => {
  const tableHead = head || {};
  return (
    <thead>
      <tr>
        {
            keys.map((key) => <th key={`id_${key}`}>{tableHead[key] || key}</th>)
        }
      </tr>
    </thead>
  );
};

const Row = ({ record }) => {
  const keys = Object.keys(record);
  return (
    <tr key={record.id}>
      { keys.map((key) => <td key={`id_${key}`}>{record[key]}</td>) }
    </tr>
  );
};

const Table = ({ data, head }) => {
  const keys = Object.keys(data[0]);
  return (
    <StyledTable className="table">
      <Head keys={keys} head={head} />
      <tbody>
        {
            data.map((record) => <Row record={record} />)
        }
      </tbody>
    </StyledTable>
  );
};

export default Table;
