import { useContext } from 'react';
import styled from 'styled-components';
import { DataContext } from "../../context/DataContext";
import { deleteCategoryAxios } from '../../api/api';
import { colorBlackDark, colorGrayLight, colorGrayMedium, colorPrimary } from '../UI/variables';
import { Link } from 'react-router-dom';

const TableContainer = styled.div`
    padding: 2rem 2.5rem;

    @media (max-width: 767px) {
        padding: 1rem;
    }
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

  @media (max-width: 767px) {
    
    th, td {
        padding: 0.5rem 0.25rem;
    }
    th {
        font-size: 1.375rem;
    }
    td {
        /* font-size: 1rem; */
    }
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

    @media (max-width: 767px) {
        font-size: 1.25rem;
    }
`;

const StyledDiv = styled.div`
    border-bottom: 2px solid ${({color}) => color};
    padding-bottom: .75rem;
    font-size: 1.5rem;
    font-weight: 300;
    width: fit-content;
    
    @media (max-width: 767px) {
        font-size: 1.25rem;
    }
`;

const Table = () => {

    const { categories } = useContext(DataContext);

    const handleDelete = (id) => {
        deleteCategoryAxios(id);
    }

    const responsive = screen.availWidth > 767;

    return (
        <TableContainer>
            <StyledTable>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        {responsive && <th>Descripción</th>}
                        <th className='center'>Editar</th>
                        <th className='center'>Remover</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((cat, i) => {
                        return (
                            <tr key={i}>
                                <td><StyledDiv color={cat.color}>{cat.name}</StyledDiv></td>
                                {responsive && <td>{cat.description}</td>}
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
