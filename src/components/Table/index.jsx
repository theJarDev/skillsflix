import { useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from "../../context/DataContext";
import { deleteCategoryAxios } from '../../api/api';
import { colorBlackDark, colorGrayLight, colorGrayMedium, colorPrimary } from '../UI/variables';
import { Link } from 'react-router-dom';

const TableContainer = styled.div`
    padding: 0 2.5rem;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 4px solid ${colorPrimary};
  /* outline-color: ${colorPrimary}; */

  th, td {
    padding: 18px 8px;
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
  
  .center {
    text-align: center;
  }

`;

const StyledBtn = styled.button`
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 300;
    background: none;
    border: none;
    cursor: pointer;
`;

const StyledDiv = styled.div`
    border-bottom: 2px solid ${({color}) => color};
    padding-bottom: .75rem;
    font-size: 1.5rem;
    font-weight: 300;
    width: fit-content;
`;

const Table = () => {

    const { categories } = useContext(DataContext);

    const handleDelete = (id) => {
        deleteCategoryAxios(id);
    }

    return (
        <TableContainer>
            <StyledTable>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th className='center'>Editar</th>
                        <th className='center'>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((cat, i) => {
                        return (
                            <tr key={i}>
                                <td><StyledDiv color={cat.color}>{cat.name}</StyledDiv></td>
                                <td>{cat.description}</td>
                                <td>
                                    <Link to={`/update-category/${cat.id}`}>
                                        <StyledBtn type='button'>Editar</StyledBtn>
                                    </Link>
                                </td>
                                <td>
                                    <StyledBtn type='button' onClick={() => handleDelete(cat.id)}>Remover</StyledBtn>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </StyledTable>
        </TableContainer>
    );
}

export default Table;
