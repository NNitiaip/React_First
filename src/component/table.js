import React from 'react';
import { MDBContainer, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const TablePage = (props) => {
  const {data} = props;
const datax = 
  data
;

return (



  
  <MDBTable  maxHeight="70vh"  responsive striped >
    <MDBTableHead columns={data.columns} />
    <MDBTableBody rows={data.rows} />
  </MDBTable>

 

);
};

export default TablePage;