import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { selectTableRowsForPreview } from "../../selectors/rows";
import { setLayoutIsEditing } from "../../reducer";

const Table = styled.table`
  color: #fff;
  border-spacing: 0;
  width: 100%;
  height: 100%;

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
  const dispatch = useDispatch();

  return (
    <Table onClick={() => dispatch(setLayoutIsEditing(true))}>
      {tableRows.length > 0 && (
        <thead>
          <tr>
            {tableRows[0].cells.map(cell => (
              <th key={`th-${cell.index}`}>{`{${cell.index + 1}}`}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {tableRows.map(row => (
          <tr key={`row-${row.index}`}>
            {row.cells.map(cell => (
              <td key={`row-${row.index}-col-${cell.index}`}>{cell.value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
