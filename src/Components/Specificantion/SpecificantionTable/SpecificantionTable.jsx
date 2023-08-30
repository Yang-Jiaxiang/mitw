import React from 'react'
import { Title, TBody } from './Inform'
import { Table } from 'reactstrap'
import './SpecificantionTable.css'

function SpecificantionTable() {
  return (
    <div className="SpecificantionTable">
      <Table bordered style={{ backgroundColor: '#f3f4f6' }}>
        <thead>
          <tr>
            <th style={{ width: '15%' }}>
              <strong data-position="6027" data-size="0">
                <span data-position="6029" data-size="2">
                  領域
                </span>
              </strong>
            </th>
            <th style={{ width: '10%' }}>
              <strong data-position="6035" data-size="0">
                <span data-position="6037" data-size="2">
                  賽道
                </span>
              </strong>
            </th>
            <th style={{ width: '15%' }}>
              <strong data-position="6043" data-size="0">
                <span data-position="6045" data-size="2">
                  簡稱
                </span>
              </strong>
            </th>
            <th>
              <strong data-position="6053" data-size="0">
                <span data-position="6055" data-size="4">
                  規範名稱
                </span>
              </strong>
            </th>
            <th>
              <strong data-position="6068" data-size="0">
                <span data-position="6070" data-size="6">
                  規範英文名稱
                </span>
              </strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span data-position="6158" data-size="5">
                MI-TW
              </span>
            </td>
            <td>
              <span data-position="6167" data-size="1">
                1
              </span>
            </td>
            <td>
              <span data-position="6176" data-size="3">
                PAT
              </span>
            </td>
            <td>
              <span data-position="6187" data-size="6">
                病人基本資料
              </span>
            </td>
            <td>
              <span data-position="6201" data-size="7">
                Patient
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="6210" data-size="5">
                MI-TW
              </span>
            </td>
            <td>
              <span data-position="6219" data-size="1">
                2
              </span>
            </td>
            <td>
              <span data-position="6228" data-size="6">
                VTSIGN
              </span>
            </td>
            <td>
              <span data-position="6239" data-size="6">
                生理量測數據
              </span>
            </td>
            <td>
              <span data-position="6253" data-size="19">
                General Vital-Signs
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="6274" data-size="5">
                MI-TW
              </span>
            </td>
            <td>
              <span data-position="6283" data-size="1">
                3
              </span>
            </td>
            <td>
              <span data-position="6292" data-size="7">
                MED&amp;DOC
              </span>
            </td>
            <td>
              <span data-position="6303" data-size="9">
                處方用藥與文件打包
              </span>
            </td>
            <td>
              <span data-position="6315" data-size="27">
                Medication &amp; DocumentBundle
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="6345" data-size="5">
                MI-TW
              </span>
            </td>
            <td>
              <span data-position="6354" data-size="1">
                4
              </span>
            </td>
            <td>
              <span data-position="6363" data-size="5">
                IMAGE
              </span>
            </td>
            <td>
              <span data-position="6374" data-size="7">
                影像與影像報告
              </span>
            </td>
            <td>
              <span data-position="6387" data-size="15">
                Image reporting
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="6405" data-size="5">
                MI-TW
              </span>
            </td>
            <td>
              <span data-position="6414" data-size="1">
                4
              </span>
            </td>
            <td>
              <span data-position="6423" data-size="4">
                PATH
              </span>
            </td>
            <td>
              <span data-position="6434" data-size="8">
                數位病理影像存取
              </span>
            </td>
            <td>
              <span data-position="6447" data-size="9">
                Pathology
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="6459" data-size="3">
                RAD
              </span>
            </td>
            <td>
              <span data-position="6468" data-size="1">
                4
              </span>
            </td>
            <td>
              <span data-position="6477" data-size="3">
                WIA
              </span>
            </td>
            <td>
              <span data-position="6488" data-size="7">
                Web影像存取
              </span>
            </td>
            <td>
              <span data-position="6503" data-size="22">
                Web-based Image Access
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="6528" data-size="3">
                RAD
              </span>
            </td>
            <td>
              <span data-position="6537" data-size="1">
                4
              </span>
            </td>
            <td>
              <span data-position="6546" data-size="3">
                SWF
              </span>
            </td>
            <td>
              <span data-position="6557" data-size="6">
                排程檢查流程
              </span>
            </td>
            <td>
              <span data-position="6571" data-size="18">
                Scheduled Workflow
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="6592" data-size="5">
                MI-TW
              </span>
            </td>
            <td>
              <span data-position="6601" data-size="1">
                6
              </span>
            </td>
            <td>
              <span data-position="6610" data-size="3">
                GEN
              </span>
            </td>
            <td>
              <span data-position="6621" data-size="5">
                基因體標記
              </span>
            </td>
            <td>
              <span data-position="6636" data-size="8">
                Genomics
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="6646" data-size="5">
                MI-TW
              </span>
            </td>
            <td>
              <span data-position="6655" data-size="1">
                5
              </span>
            </td>
            <td>
              <span data-position="6664" data-size="8">
                COLLCARE
              </span>
            </td>
            <td>
              <span data-position="6675" data-size="4">
                協同照護
              </span>
            </td>
            <td>
              <span data-position="6691" data-size="18">
                Collaborative Care
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="6711" data-size="5">
                MI-TW
              </span>
            </td>
            <td>
              <span data-position="6720" data-size="1">
                7
              </span>
            </td>
            <td>
              <span data-position="6729" data-size="3">
                EMS
              </span>
            </td>
            <td>
              <span data-position="6740" data-size="6">
                緊急醫療救護
              </span>
            </td>
            <td>
              <span data-position="6754" data-size="26">
                Emergency Medical Services
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="6782" data-size="5">
                MI-TW
              </span>
            </td>
            <td>
              <span data-position="6791" data-size="1">
                8
              </span>
            </td>
            <td>
              <span data-position="6800" data-size="5">
                CLAIM
              </span>
            </td>
            <td>
              <span data-position="6811" data-size="6">
                醫療保險理賠
              </span>
            </td>
            <td>
              <span data-position="6825" data-size="24">
                Medical Insurance Claims
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="6851" data-size="5">
                MI-TW
              </span>
            </td>
            <td>
              <span data-position="6860" data-size="1">
                9
              </span>
            </td>
            <td>
              <span data-position="6869" data-size="6">
                TELMED
              </span>
            </td>
            <td>
              <span data-position="6880" data-size="4">
                遠距醫療
              </span>
            </td>
            <td>
              <span data-position="6895" data-size="12">
                Tel-Medicine
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <span data-position="6910" data-size="5">
                MI-TW
              </span>
            </td>
            <td>
              <span data-position="6919" data-size="2">
                10
              </span>
            </td>
            <td>
              <span data-position="6928" data-size="3">
                TCR
              </span>
            </td>
            <td>
              <span data-position="6939" data-size="6">
                臺灣癌症登記
              </span>
            </td>
            <td>
              <span data-position="6953" data-size="22">
                Taiwan Cancer Registry
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default SpecificantionTable
