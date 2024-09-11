import React, { useEffect, useState } from 'react';
import { getProtecdedData } from '../../../Services/api';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';

const Products = () => {
  const [lists, setLists] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; 

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getProtecdedData(currentPage); 
        setLists(res.data.items);
        setTotalCount(res.data.totalCount); 
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [currentPage]); 
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='container'>
      <h1>Products</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Sale Price</th>
            <th>Cost Price</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {lists && lists.map((list, index) => (
            <tr key={index}>
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td> 
              <td>{list.name}</td>
              <td>{list.salePrice} $</td>
              <td>{list.costPrice} $</td>
              <td>{list.category.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>

   
      <Pagination>
        <Pagination.Prev 
          onClick={() => handlePageClick(currentPage > 1 ? currentPage - 1 : currentPage)} 
          disabled={currentPage === 1} 
        />
        {Array.from({ length: totalPages }, (_, i) => (
          <Pagination.Item 
            key={i + 1} 
            active={i + 1 === currentPage}
            onClick={() => handlePageClick(i + 1)}
          >
            {i + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next 
          onClick={() => handlePageClick(currentPage < totalPages ? currentPage + 1 : currentPage)} 
          disabled={currentPage === totalPages} 
        />
      </Pagination>
    </div>
  );
};

export default Products;
