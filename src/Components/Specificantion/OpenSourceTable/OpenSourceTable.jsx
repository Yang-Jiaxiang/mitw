import React from 'react'
import { Title, TBody } from './Inform'
import { Table } from 'reactstrap'

function OpenSourceTable() {
  return (
    <div>
      <Table bordered style={{ backgroundColor: '#f3f4f6' }}>
        <thead>
          <tr>
            <th>
              <strong>名稱</strong>
            </th>
            <th>
              <strong>簡介</strong>
            </th>
            <th>
              <strong>適用賽道</strong>
            </th>
            <th>
              <strong>貢獻者</strong>
            </th>
          </tr>
        </thead>
        <tbody style={{ textAlign: 'center' }}>
          {TBody.map((item, i) => {
            return (
              <tr key={i}>
                <td
                  scope="row"
                  style={{
                    verticalAlign: 'middle',
                  }}
                >
                  {item.img.length > 0 ? <img src={item.img} width={'30%'} style={{ height: '100%' }} /> : ''}

                  <a
                    href={item.link}
                    target="_blank"
                    style={{
                      color: '#295285',
                      textDecoration: 'none',
                      height: '100%',
                    }}
                  >
                    {item.name}
                  </a>
                </td>
                <td
                  style={{
                    textAlign: 'left',
                  }}
                >
                  {item.introduce}
                </td>
                <td
                  style={{
                    verticalAlign: 'middle',
                  }}
                >
                  {item.traks}
                </td>
                <td
                  style={{
                    verticalAlign: 'middle',
                  }}
                >
                  <a href={item.clink} target="_blank" style={{ color: '#295285', textDecoration: 'none' }}>
                    {item.contributor}
                  </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default OpenSourceTable
