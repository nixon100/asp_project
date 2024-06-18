import React from 'react'
import '../App.css'
import { useEffect } from 'react';
import { useState } from 'react';
import * as XLSX from 'xlsx/xlsx.mjs';
import template from '../component/template.json'
import Testing from '../component/testing';

import template00 from '../component/template00.json'
import referenceFlipkart from '../component/referencevalueF.json'
import referenceAmazon from '../component/referenceValueA.json'
import TemplateM from '../myntra/TemplateM.json';
import ReferenceN from '../myntra/ReferenceN.json'
import { useNavigate } from 'react-router-dom';
import Home from '../pages/Home'

const Amzprimemain = () => {
    const [data2, setData2] = useState([]);
    const [dropdown,setDropdown]=useState("volvo")
    const [test111,setTest111] = useState("fd")
    const [zx, setZx] = useState(true)
    const [logout, setLogout] = React.useState(false);
    const Navigate = useNavigate();
    // useEffect(()=>{
    // if(!localStorage.getItem("auth")) Navigate("/login")
    // },[logout])



    const handleFileUpload2 = (e) => {
      if (zx == true) {

        const reader = new FileReader();
        reader.readAsBinaryString(e.target.files[0]);
        // console.log(e.target.files)
        reader.onload = (e) => {
          const data = e.target.result;
          const workbook = XLSX.read(data, { type: "binary" });
          // console.log(workbook)
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const parsedData = XLSX.utils.sheet_to_json(sheet);
          // console.log(parsedData)
          setData2(parsedData);
        };
      }
      setZx(false);
      }
    const downloadExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(data2);
        // console.log(worksheet)
        const workbook = XLSX.utils.book_new();
        // console.log(workbook)

        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, "sample-file.xlsx");
      };

    /////////templat download ////////////
    const downloadExcel1 = () => {
      
        const worksheet = XLSX.utils.json_to_sheet(template00);
        // console.log(worksheet)
        const workbook = XLSX.utils.book_new();
        // console.log(workbook)

        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, "sample-file.xlsx");
      
      };
      /////////templat download ////////////
  const downloadExcel2 = () => {
   
      const worksheet = XLSX.utils.json_to_sheet(referenceAmazon);
      // console.log(worksheet)
      const workbook = XLSX.utils.book_new();
      // console.log(workbook)

      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.writeFile(workbook, "sample-file.xlsx");
    
  
    };
////////////template download////////////////   
    // useEffect(()=>{
    //     console.log(data2)
    //   },[data2])
      // useEffect(()=>{
      //   console.log(dropdown)
      // })

      function df (e) {
        const a = e.target.value
        setDropdown(a)
       
      }
      // console.log(dropdown)
      // useEffect(()=>{
      //   if(dropdown==="audi"){
      //     alert("use only flipkart file")

      //   }
      // },[dropdown])
      
   
      const logoutHandler = (e) => {
        e.preventDefault();
        // localStorage.removeItem("auth");
        // setLogout(true);
        Navigate("/");
      };

  return (
    <div> 

    <button onClick={logoutHandler} className="btn btn-primary text-left">
        Home
      </button>
    <div className="app2">
    <input 
      type="file" 
      accept=".xlsx, .xls" 
      onChange={(e) => {   handleFileUpload2(e) // Call the handleFileUpload2 function here
      }} 
    />
   
  {/* <Home setDropdown={setDropdown}/> */}
  <Testing data2={data2} setData2={setData2} dropdown = {"saab"}/>
</div>



    {/* <div className="app3">
    {data2.length > 0 && (
      
      <table className="table">
        <thead>
          <tr>
            {Object.keys(data2[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data2.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    )}
    </div>
 */}
{data2.length > 0 && (
<table class="styled-table">
    <thead>
        <tr>
            {/* <th>Name</th>
            <th>Points</th> */}
            {Object.keys(data2[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
        </tr>
    </thead>
    <tbody>
        {/* <tr>
            <td>Dom</td>
            <td>6000</td>
        </tr>
        <tr class="active-row">
            <td>Melissa</td>
            <td>5150</td>
        </tr> */}
        {data2.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
    </tbody>
</table>
)}
    <div className="App">
    <button id='xyz' onClick={downloadExcel1}>Download Excel Template</button>
    <button id='xyz' onClick={downloadExcel2}>Download Reference Name</button>
    <button id='xyz' onClick={downloadExcel}>Download as Excel</button>
    </div>
    
   {/* <Testing1 data2={data2} setData2={setData2}/> */}
    </div>
  )
}

export default Amzprimemain