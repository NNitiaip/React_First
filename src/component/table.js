import React from 'react';
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const TablePage = (props) => {
  const {data} = props;
  console.log(data)


return (



  
  <MDBTable  maxHeight="70vh"  responsive striped >
    <MDBTableHead columns={data.column} />
    <MDBTableBody rows={data.rows} />
  </MDBTable>

 

);
};

export default TablePage;