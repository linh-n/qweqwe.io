import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { setLayoutIsEditing } from "../../reducer";
import { selectSourceArray } from "../../selectors/source-array";

const TableStyled = styled.table`
  color: #fff;
  border-spacing: 0;
  min-width: 100%;
  height: 100%;
  cursor: text;
  font-family: "Ubuntu Mono";
  table-layout: fixed;

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

  tr {
    height: 1px;
  }
  tr.filler {
    height: auto;
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

const SourceTable = () => {
  const dispatch = useDispatch();
  const sourceArray = useSelector(selectSourceArray);

  return (
    <TableStyled onClick={() => dispatch(setLayoutIsEditing(true))}>
      {tableRows.length > 0 && (
        <>
          <thead>
            <tr>
              {Object.keys(sourceArray[0]).map(key => (
                <th key={`th-${key}`}>{`{${key}}`}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {sourceArray.map(item => (
              <tr key={`row-${item.index}`}>
                {Object.entries(item).map(([key, value]) => (
                  <td key={`row-${item.index}-col-${key}`}>{value}</td>
                ))}
              </tr>
            ))}
            <tr className="filler">
              {Object.keys(sourceArray[0]).map(key => (
                <th key={`td-filler-${key}`}>&nbsp;</th>
              ))}
            </tr>
          </tbody>
        </>
      )}
    </TableStyled>
  );
};

SourceTable.whyDidYouRender = true;

export default SourceTable;
