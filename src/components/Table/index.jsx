import styled from 'styled-components';
import { colorBlackDark, colorGrayLight, colorGrayMedium, colorPrimary } from '../UI/variables';

const TableContainer = styled.div`
    padding: 0 2.5rem;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 4px solid ${colorPrimary};
  /* outline-color: ${colorPrimary}; */

  th, td {
    padding: 8px;
  }

  th {
    /* background-color: #f2f2f2; */
    text-align: start;
    border: 4px solid ${colorPrimary};
    font-size: 2rem;
    font-weight: 400;
  }

  td {
    font-size: 1.5rem;
    font-weight: 300;
  }

  button {
    font-size: 1.5rem;
    font-weight: 300;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

const Table = () => {
  return (
    <TableContainer>
        <StyledTable>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Editar</th>
                    <th>Remover</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Item 1</td>
                    <td>Descripción del Item 1</td>
                    <td>
                        <button>Editar</button>
                    </td>
                    <td>
                        <button>Remover</button>
                    </td>
                </tr>
                <tr>
                    <td>Item 2</td>
                    <td>Descripción del Item 2</td>
                    <td>
                        <button>Editar</button>
                    </td>
                    <td>
                        <button>Remover</button>
                    </td>
                </tr>
                <tr>
                    <td>Item 3</td>
                    <td>Descripción del Item 3</td>
                    <td>
                        <button>Editar</button>
                    </td>
                    <td>
                        <button>Remover</button>
                    </td>
                </tr>
                <tr>
                    <td>Item 4</td>
                    <td>Descripción del Item 4</td>
                    <td>
                        <button>Editar</button>
                    </td>
                    <td>
                        <button>Remover</button>
                    </td>
                </tr>
            </tbody>
        </StyledTable>
    </TableContainer>
  );
}

export default Table;
