import React from 'react';
import styled from 'styled-components';

// Components
import THead from './THead';
import TBody from './TBody';

const StyledTable = styled.table``;

function Table({ head, data }) {
  const keys = Object.keys(data[0]);
  return (
    <StyledTable className="table">
      <THead keys={keys} head={head} />
      <TBody data={data} />
    </StyledTable>
  );
}

export default Table;
