import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { selectTableRowsForPreview } from "../../selectors";

const Table = styled.table`
  color: #fff;
  border-spacing: 0;
  border-radius: 0 25px 0 0;
  overflow: hidden;

  thead {
    text-align: left;
  }

  th,
  td {
    padding: 0 10px;
  }

  th {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  th:nth-child(odd),
  td:nth-child(odd) {
    background-color: rgba(255, 255, 255, 0.1);
  }
  th:nth-child(even),
  td:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

export default () => {
  const tableRows = useSelector(selectTableRowsForPreview);
  return (
    <Table>
      {tableRows.length > 0 && (
        <thead>
          {tableRows[0].cells.map(cell => (
            <th key={`th-${cell.index}`}>{`{${cell.index + 1}}`}</th>
          ))}
        </thead>
      )}
      {tableRows.map(row => (
        <tr key={`row-${row.index}`}>
          {row.cells.map(cell => (
            <td key={`row-${row.index}-col-${cell.index}`}>{cell.value}</td>
          ))}
        </tr>
      ))}
    </Table>
  );
};
