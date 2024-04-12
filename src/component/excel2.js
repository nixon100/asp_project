import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import * as XLSX from 'xlsx/xlsx.mjs';
import template from './template.json'
import Testing from './testing';
import Testing1 from './Testing1';
import Testing3 from './flipkart/Testing3';
import template00 from './template00.json'
import referenceFlipkart from './referencevalueF.json'
import referenceAmazon from './referenceValueA.json'
import Testing4 from '../myntra/Testing4';
import TemplateM from '../myntra/TemplateM.json';
import ReferenceN from '../myntra/ReferenceN.json'

const Excel2 = () => {
    const [data2, setData2] = useState([]);
    const [dropdown,setDropdown]=useState("volvo")
    const [zx, setZx] = useState(true)



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
      if ((dropdown==="volvo")|| (dropdown==="saab") || (dropdown==="mercedes") ) {
        const worksheet = XLSX.utils.json_to_sheet(template00);
        // console.log(worksheet)
        const workbook = XLSX.utils.book_new();
        // console.log(workbook)

        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, "sample-file.xlsx");
      }else if (dropdown ==="Dodge") {
        const worksheet = XLSX.utils.json_to_sheet(TemplateM);
        // console.log(worksheet)
        const workbook = XLSX.utils.book_new();
        // console.log(workbook)

        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, "sample-file.xlsx");
      }else {
        const worksheet = XLSX.utils.json_to_sheet(template);
        // console.log(worksheet)
        const workbook = XLSX.utils.book_new();
        // console.log(workbook)

        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, "sample-file.xlsx");
      }
   
      };
      /////////templat download ////////////
  const downloadExcel2 = () => {
    if (dropdown =="audi") {
      const worksheet = XLSX.utils.json_to_sheet(referenceFlipkart);
      // console.log(worksheet)
      const workbook = XLSX.utils.book_new();
      // console.log(workbook)

      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.writeFile(workbook, "sample-file.xlsx");
    }else if (dropdown =="Dodge") {
      const worksheet = XLSX.utils.json_to_sheet(ReferenceN);
      // console.log(worksheet)
      const workbook = XLSX.utils.book_new();
      // console.log(workbook)

      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.writeFile(workbook, "sample-file.xlsx");
    }else {
      const worksheet = XLSX.utils.json_to_sheet(referenceAmazon);
      // console.log(worksheet)
      const workbook = XLSX.utils.book_new();
      // console.log(workbook)

      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.writeFile(workbook, "sample-file.xlsx");
    }
  
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
      
      function Dropd() {
        if (dropdown==="audi") {
          return <Testing3 data2={data2} setData2={setData2} dropdown = {dropdown} />
        }else if(dropdown==="Dodge"){
          return <Testing4 data2={data2} setData2={setData2} dropdown = {dropdown}/>
        }else{
          return <Testing data2={data2} setData2={setData2} dropdown = {dropdown}/>

        }
      }

  return (
    <div>      
    
    <div className="app2">
    <input 
      type="file" 
      accept=".xlsx, .xls" 
      onChange={(e) => {   handleFileUpload2(e) // Call the handleFileUpload2 function here
      }} 
    />
   
  
  <label for="cars">Choose:</label>

<select id="cars"  onChange={df}>
  <option value="volvo">Amazon - Easy Ship</option>
  <option value="saab">Amazon - Prime Only</option>
  <option value="mercedes">Amazon - FBA</option>
  <option value="audi">Flipkart</option>
  <option value="Dodge">Myntra</option>
</select>
{Dropd()}
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
    <button onClick={downloadExcel1}>Download Excel Template</button>
    <button onClick={downloadExcel2}>Download Reference Name</button>
    <button onClick={downloadExcel}>Download as Excel</button>
    </div>
    
   {/* <Testing1 data2={data2} setData2={setData2}/> */}
    </div>
  )
}

export default Excel2