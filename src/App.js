
import './App.css';
import React, { useEffect, useState } from 'react';
import TablePage from './component/table';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavbarPage from './component/navbartop';
import { MDBBox, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import SelectPage from './component/SideNavPage';
import serveice from './services/catfact'




const App = () => {
  const [Dataidp, Setdataidp] = useState([]);
  const [datatable, Setdatatable] = useState({});
  let $column = [];

  const Getdata = async () => {
    let arr = await serveice(10);
    // arr.data.length = 10
    Setdataidp(arr.data);
    // console.log(Dataidp)
    const newData = Object.keys(arr.data[0])

    $column = newData.map((val, i) => (
      {
        label: val,
        field: val,
        minimal: "sm"

      }
    )
    )
    Setdatatable({
      columns: $column,
      rows: arr.data,
    })

  }

  useEffect(() => {
    Getdata()
    return () => {

    }
  }, [])
  return (


    <div className="App">
      <NavbarPage />

      <MDBContainer fluid >
        <MDBRow>

          <MDBCol size="12" className="mb-4">
            <MDBRow>
              <MDBCol className="px-2">
                <SelectPage FIELD="YEAR" data={[...Dataidp]} />
              </MDBCol>

              <MDBCol className="px-2">
                <SelectPage FIELD="NAME" data={[...Dataidp]} />
              </MDBCol>

              <MDBCol className="px-2">
                <SelectPage FIELD="LAB CODE" data={["TOP", "TLB", "TPX"]} />
              </MDBCol>

              <MDBCol className="px-2">
                <SelectPage FIELD="CATEGORY"    data={Dataidp} />
              </MDBCol>
              <MDBCol className="px-2">
                <SelectPage FIELD="COURSE NAME" data={Dataidp} />
              </MDBCol>

              <MDBCol className="px-2">
                <SelectPage FIELD="COURSE TYPE" data={Dataidp} />
              </MDBCol>



            </MDBRow>

          </MDBCol>
          <MDBCol>
            <TablePage data={datatable} fuc={Setdatatable} />
          </MDBCol>



        </MDBRow>




      </MDBContainer>



    </div>
  );
}

export default App;


