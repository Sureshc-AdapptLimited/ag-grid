import './App.css';
import React, {useState} from 'react';
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import { mockTransactionData, mockTransactionDataColumns } from "./utils/data.ts";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
// const customAttribute = 'data-custom-attribute';
function App() {
  const [rowData, setRowData]=useState();
  const [colDefs, setColDefs] = useState([
      {field: 'make'},
      {field: 'model'},
      {field: 'price'},
    ]);

    React.useEffect(() => {
      fetch('https://www.ag-grid.com/example-assets/row-data.json')
          .then(result => result.json())
          .then(rowData => setRowData(rowData))
    }, []);

    const dynamicClass=(props)=>{
      // return props.colDefs.headerName+'_'+props.data.id;
      // console.log(props.column.colId)
      // console.log(props.column.colDef.headerName)
      // console.log(props.data.id)
      return props.column.colDef.headerName+'_'+props.data.id;
    }

  return (
    <div className="App">
      <h2>AG Grid Implementation</h2>
      <div
        className="ag-theme-alpine"
        style={{
          height: "90vh",
          width: "100%"
        }}
      >
        <AgGridReact
          rowData={mockTransactionData()}
          columnDefs={mockTransactionDataColumns()}
          defaultColDef={{cellClass:dynamicClass}}
          pagination={true}
        ></AgGridReact>

        {/* <AgGridReact 
        defaultColDef={{sortable: true, filter: true }}                
        pagination={true}                
        rowData={rowData}                
        columnDefs={colDefs}>
        </AgGridReact> */}
      </div>
    </div>
  );
}

export default App;
