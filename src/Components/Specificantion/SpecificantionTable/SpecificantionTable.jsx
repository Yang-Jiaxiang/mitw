import React from 'react'
import { Title, TBody } from "./Inform";
import { Table} from "reactstrap";

function SpecificantionTable() {
  return (
    <div>
    <Table bordered  style={{backgroundColor:"#dcdcdc"}}>
      <thead>
        <tr>
          {Title.map((item) => {
            return <th>{item}</th>;
          })}
        </tr>
      </thead>
      <tbody style={{justifyContent: "center",alignItems:"center" }}>
        {TBody.map((item) => {
          return (
            <tr>
              <th scope="row">
                {item.domain}
              </th>
              <th>{item.trak}</th>
              <th>{item.short}</th>
              <th >{item.name1}</th>
              <th >{item.name2}</th>

            </tr>
          );
        })}
      </tbody>
    </Table>
  </div>
  )
}

export default SpecificantionTable
